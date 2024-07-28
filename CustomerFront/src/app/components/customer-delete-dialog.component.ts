import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/app/Interfaces/Customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../Services/customer.service';


@Component({
  selector: 'customer-delete-dialog',
  templateUrl: 'customer-delete-dialog.component.html',
  styleUrls: ['./customer-delete-dialog.component.css']
})
export class CustomerDeleteDialogComponent implements OnInit{

  formTitle: string = "Delete";
  actionButton: string = "Confirm";

  constructor(
    private dialogRef: MatDialogRef<CustomerDeleteDialogComponent>,
    private snackBar: MatSnackBar,
    private customerService: CustomerService, 
    @Inject(MAT_DIALOG_DATA) public customerData: Customer
  ) {

  }

  ngOnInit(): void {

  }

  showAlert(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition:'end',
      verticalPosition:'top',
      duration:3000
    });
  }

  deleteCustomer(id:number){
    if(id !== null) {
      this.customerService.delete(id).subscribe({
        next:(data)=>{
          this.showAlert("Customer deleted", "Ok");
          this.dialogRef.close("Delete");
        },
        error:(e)=>{
          this.showAlert("Customer delete", "Error");
        }
      })}
  }

}