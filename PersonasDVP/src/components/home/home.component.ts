import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeService } from 'src/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  apiList: any;
  data : any;
  data2: any
  map: any;
  
  constructor(private homeService: HomeService,) {}
  
  ngOnInit(): void {

    this.getData();
  }

  public async getData(){
    (await this.homeService.getApi()).subscribe((resp: any) => {
      console.log(resp);
      this.apiList = resp;
      
      this.data = Object.values(this.apiList);

      //this.map =  Object.entries(this.data).forEach(([key, value]) => {
      //  console.log(key)
      //  console.log(value)
      //});

    this.data2 = this.data[2];

     });
  }
}
