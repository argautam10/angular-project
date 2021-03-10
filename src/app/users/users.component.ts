import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { userData } from 'src/userData';
import { GenericTableServiceService } from '../generic-table-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  ELEMENT_DATA : userData[]=[]; // initialized the element data to a array
  // making display columns
  displayedColumns: string[]=['checkbox','updated', 'country', 'population', 'continent' , 'flag', 'menu'];
  // adding userData to dataSource using MatTableDataSource
  dataSource = new MatTableDataSource<userData>(this.ELEMENT_DATA);

  // using Paginator in my generic table
  @ViewChild(MatPaginator , {static: true}) paginator: MatPaginator;
  // pass the service class
  constructor(private service:GenericTableServiceService) { }

  ngOnInit(){
       this.getAllUserData();
       this.dataSource.paginator = this.paginator;
  }

  public getAllUserData(){
    let response  = this.service.fetchUserApi();
    // subscribing the response to render in the browser
    response.subscribe( user => this.dataSource.data = user as userData[] );
  }

}
