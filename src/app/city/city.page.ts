import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  id: any;
  cities : any = [];
  // Codigo esta sin el !
  finalId!: number;
  name! : string;
  image! : string;
  desc! : string;


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id",this.id);
    this.finalId=this.id-1;

    this.getCities().subscribe(res=>{
      console.log("Res",res)
      this.cities=res;
      this.name=this.cities[this.finalId].name;
      this.image=this.cities[this.finalId].image;
      this.desc=this.cities[this.finalId].desc;
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

}
