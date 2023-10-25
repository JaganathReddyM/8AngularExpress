import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BackendAccessService } from ".././backend-access.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = '8AngularExpress';
  userList : any = [];
  expresponse: string ='';
  constructor(private http : HttpClient ,
    private baccess : BackendAccessService){
  }
  getAllUsers(){
    this.userList = this.baccess.getAllUsers();
  }
  addUser(udata : any){
    this.expresponse = this.baccess.addUser(udata);
  }

}
