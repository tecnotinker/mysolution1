import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/app/Interfaces/Customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'customer-edit-dialog',
  templateUrl: 'customer-edit-dialog.component.html',
  styleUrls: ['./customer-edit-dialog.component.css']
})
export class CustomerEditDialogComponent implements OnInit{
  customerForm : FormGroup;
  formTitle: string = "New";
  actionButton: string = "Save";

  constructor(
    private dialogRef: MatDialogRef<CustomerEditDialogComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private customerService: CustomerService, 
    @Inject(MAT_DIALOG_DATA) public customerData: Customer
  ) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
    })
  }

  ngOnInit(): void {
    if(this.customerData){
      console.log(this.customerData);
      this.customerForm.patchValue({
        firstName: this.customerData.firstName,
        lastName: this.customerData.lastName,
        email: this.customerData.email,
      })
    }
  }

  showAlert(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition:'end',
      verticalPosition:'top',
      duration:3000
    });
  }

  addEditCustomer(){
    const model: Customer = {
      id: 0,
      firstName: this.customerForm.value.firstName,
      lastName: this.customerForm.value.lastName,
      email: this.customerForm.value.email,
    }

    if(this.customerData == null){
      this.customerService.add(model).subscribe({
        next:(data)=>{
          this.showAlert("Customer added", "Ok");
          this.dialogRef.close("New");
        },
        error:(e)=>{
          this.showAlert("Customer add", "Error");
        }
      })}
    else {
      model.id = this.customerData.id;
      this.customerService.update(this.customerData.id, model).subscribe({
        next:(data)=>{
          this.showAlert("Customer updated", "Ok");
          this.dialogRef.close("Update");
        },
        error:(e)=>{
          this.showAlert("Customer update", "Error");
        }
      })
    }
    console.log(this.customerForm.value);
  }

}