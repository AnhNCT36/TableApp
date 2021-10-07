
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css']
})
export class InforComponent implements OnInit {


  constructor(private httpService: HttpClient) {
    this.arrUser = [];
  }
  arrUser:{id:number,firstName:string,lastName:string,email:string, gender:string,birthday:string,salary:number,phone:string}[];


  ngOnInit () {
    this.httpService.get('./assets/users.json').subscribe(
      data => {
        this.arrUser = data as {id:number,firstName:string,lastName:string,email:string, gender:string,birthday:string,salary:number,phone:string}[]; // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}

