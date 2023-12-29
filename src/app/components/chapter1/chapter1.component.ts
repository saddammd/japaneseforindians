import { Component } from '@angular/core';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class Chapter1Component {

  prevValue(){}
  nextValue1(){}
  flip(){}

  //Choose
  nextValue2(opt1:any,opt2:any,opt3:any,opt4:any){}
  prevValue2(opt1:any,opt2:any,opt3:any,opt4:any){}
  selectedAnswer(opt4:any){}
  submitAnswer(){}

}
