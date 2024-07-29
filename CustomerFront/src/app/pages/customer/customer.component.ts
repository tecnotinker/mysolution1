import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Interfaces/Customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerEditDialogComponent } from 'src/app/components/customer-edit-dialog.component';
import { CustomerDeleteDialogComponent } from 'src/app/components/customer-delete-dialog.component';
import { SessionStorageService } from 'src/app/Services/session-storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'lastUpdateDateTime', 'actions'];
  dataSource = new MatTableDataSource<Customer>();
  lastUpdatedRowId: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

constructor(
  private customerService: CustomerService, 
  private sessionStorageService: SessionStorageService,
  public dialog: MatDialog){

}

ngOnInit(){
  this.getCustomers();
}

getCustomers(){
  this.customerService.getList().subscribe({
    next: (data) =>{
      this.dataSource.data = data;

      this.lastUpdatedRowId = this.sessionStorageService.getItem('lastUpdatedId');
    },
    error:(e)=>{
      console.log(e);
    }
  })
}

openCreateDialog() {
  this.dialog.open(CustomerEditDialogComponent, {
    disableClose:true,
  }).afterClosed().subscribe(result =>{
    if(result == "New"){
      this.getCustomers();
    }
  });
}

openEditDialog(model: Customer) {
  this.dialog.open(CustomerEditDialogComponent, {
    disableClose:true,
    data: model,
  }).afterClosed().subscribe(result =>{
    if(result == "Update"){
      this.getCustomers();
    }
  });
}

openDeleteDialog(model: Customer) {
  this.dialog.open(CustomerDeleteDialogComponent, {
    disableClose:true,
    data: model,
  }).afterClosed().subscribe(result =>{
    if(result == "Delete"){
      this.getCustomers();
    }
  });
}

selectElement(row:Customer){
  console.log(row);
  
  this.lastUpdatedRowId = row.id;
  this.sessionStorageService.setItem('lastUpdatedId', row.id);
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
