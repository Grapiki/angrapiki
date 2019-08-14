import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { SiteLoginServiceService } from './site-login-service.service';

@Component({
  selector: 'app-site-login',
  templateUrl: './site-login.component.html',
  styleUrls: ['./site-login.component.css']
})
export class SiteLoginComponent implements OnInit {
  //Nom du formulaire
  fg: FormGroup;
  user:any={}
  errorMsg:String
  errorMessage:String
  //submitButton:boolean

  constructor(private fb: FormBuilder, private _logServ: SiteLoginServiceService) {
    this.createForm();
  }
  ngOnInit() {
    this.loadUser();
  }

  createForm(){
    this.fg = this.fb.group({
      floatLabel: 'auto',
      //Initialiser les champs formControlName
      email:[''],
      password:['']
    });
  }

  loadUser(){
    return this._logServ
      .getUserByEmail("hilaire.sirika@hotmail")
      .subscribe(data => this.user = data,
                error => this.errorMsg = error)
  }

  //Vérification des données du formulaire
  checkLogin(formData){
    if(this.checkField(formData.email)&&this.checkField(formData.password)){
      this.errorMessage="";
      //alert("You're E-mail is "+formData.email);
    }else{
      this.errorMessage="Merci de renseigner tous les champs obligatoires !";
    }
  }
  checkField(value){
    let isOk = false;
    if(value.trim() != null && value.trim() != ""){
      isOk = true;
    }else{
      isOk = false;
    }
    return isOk;
  }

  //Vérification des données dans la BDD
}
