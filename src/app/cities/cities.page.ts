import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {
  cities: any = [];
  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getCities().subscribe(res=>{
      console.log("Res",res)
      this.cities=res;
    })
  }

  getCities(){
    return this.http
    .get("assets/files/cities.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Selected city',
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  async presentAlert1(){
    const alert =await this.alertController.create({
      header: "Delete city",
      message: "This city is deleted",
      buttons: ["OK"],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2(){
    const alert =await this.alertController.create({
      header: "Delete city",
      message: "Sure?",
      buttons: [
        {
          text:"No",
          handler:()=>{
            console.log("No cancel")
          }
        },
        {
          text:"Yes",
          handler:()=>{
            console.log("City deleted")
          }
        }
      ],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
