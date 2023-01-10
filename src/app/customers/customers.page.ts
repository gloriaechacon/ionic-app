import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  users: any = [];
  searchedUser:any;
  permission: boolean | undefined;
  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {
    // this.permission=false;
    this.permission=true;
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.users=res;
    })
  }

  goToDetail(){
    this.router.navigate(['/details'])
  }

  getUsers(){
    return this.http
    .get("assets/files/customers.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }

  /*
  Segun el codigo va asi 
   searchCustomer(event){
    const text = event.target.value;
  */
  searchCustomer(event:Event) {
    const text = (event.target as HTMLInputElement).value;
    this.searchedUser = this.users;
    if(text && text.trim() != ' '){
      this.searchedUser = this.searchedUser.filter((user: any)=>{
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

}
