import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.scss']
})
export class BirthComponent implements OnInit {

  nameText: string = "";
  //messageText: string = "";

  constructor(
    private activatedRoute: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.nameText = this.activatedRoute.snapshot.params['name'];
    //this.messageText = this.activatedRoute.snapshot.params['message'];    
  }

}
