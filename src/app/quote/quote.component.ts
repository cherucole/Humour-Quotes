import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


quotes =[
new Quote("cherucole", "my alarm is jealous of me and my bed", "cherucole", new Date(2018, 3,24)),
new Quote("twitter", "opening my wallet makes me wanna cry", "twitter", new Date(2018, 3,24)),
new Quote("cherucole", "my alarm is jealous of me and my bed", "cherucole", new Date(2018, 3,24)),

]

goalComplete(complete:boolean){
  this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit() {
  }

}
