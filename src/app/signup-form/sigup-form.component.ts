import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigup-form',
  templateUrl: './sigup-form.component.html',
  styleUrls: ['./sigup-form.component.scss']
})
export class SigupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data:any){
       console.log("data")
  }

}
