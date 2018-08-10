import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
// export class UserInputComponent implements OnInit{




@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  newQuote= new Quote("", "", "", new Date());
  @Output() addQuote= new EventEmitter<Quote>();
  SubmitQuote(){
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
