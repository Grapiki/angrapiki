import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'Grapiki';

  users: any = [];
 constructor(private _myserv: MyServiceService){
   
   }

 ngOnInit() {
  this.loadUsers()
}

// Get employees list
loadUsers() {
  return this._myserv.getUsers().subscribe(data => {
    this.users = data;
  })
}

}
