import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Vocabulary } from './vocabulary';
import { Quiz } from './quiz';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';
import { BackendconnectionService } from 'src/app/services/backendconnection.service';


@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class Chapter1Component {
/*Quiz Variables Declaration  Start*/
  quiz = new Quiz();
  Question:string = '';
  answer:any = [
                  { string:'', boolean: false},
                  { string:'', boolean: false},
                  { string:'', boolean: false},
                  { string:'', boolean: false}
                ];
  quiz_i: number = 3;
  optionItr: number = 0;
  score: number = 0;
  remainingTime = 60;
  progressWidth = 100;
  timerSubscription: Subscription = new Subscription;

  /* 
  Quiz Variables Declaration End */
 
  vocabulary = new Vocabulary();
  romaji:string = '';
  hiragana: string = '';
  english: string = '';
  i: number = 0;
  rotate: string = 'rotateY( 0deg )';
  


  ngOnInit(): void {
    console.log("chapter 1 loaded")
    this.displayVocabulary(0);
    this.displayQuiz(0);    
  }

  constructor(private el: ElementRef, private renderer: Renderer2,
    private timerService: TimerService,
    private service: BackendconnectionService
    ) {}

/* Vocabulary Section Start*/
  displayVocabulary(iterator:number){
   // this.service.setLoadingState(false,'none');
   if(iterator >= this.vocabulary.Content.length){
    const flipBtn = this.el.nativeElement.querySelector('.flip-btn') as HTMLElement;
    const resetBtn = this.el.nativeElement.querySelector('.reset-btn') as HTMLElement;
    const skipPrevComputer = this.el.nativeElement.querySelector('.skip-prev') as HTMLElement;
    const skipNextComputer = this.el.nativeElement.querySelector('.skip-next') as HTMLElement;
    const card = this.el.nativeElement.querySelector('.card') as HTMLElement;
    const counter = this.el.nativeElement.querySelector('.counter') as HTMLElement;

    skipPrevComputer.style.display = 'none';
    skipNextComputer.style.display = 'none';
    card.style.display = 'none';
    counter.style.display = 'none';
    resetBtn.style.display = 'inline-block';
    

    flipBtn.style.display = 'none';
    flipBtn.style.background = '#03446A;'
    flipBtn.style.color = '#ffffff'
  }
    console.log("chapter 1 dispaly vocabulary")
    this.romaji = this.vocabulary.Content[iterator].Romaji;
    this.hiragana = this.vocabulary.Content[iterator].Hiragana;
    this.english = this.vocabulary.Content[iterator].English;
   
  }

  prevValue(){
    if(this.i>0){
      this.i--;
      this.displayVocabulary(this.i);
    }
    else{
      this.i = 0;
    }
  }
  nextValue1(){
    if(this.i <= this.vocabulary.Content.length){
      this.i++;
      this.displayVocabulary(this.i);    

    }
    
  }
  flip(){
    if(this.rotate === "rotateY( 0deg )"){
      this.rotate="rotateY( 180deg )"
    document.getElementById('contentid')!.style.transform=this.rotate;
    }
    else{
      this.rotate="rotateY( 0deg )"
      document.getElementById('contentid')!.style.transform=this.rotate;
    }
  }
  reset(){
    this.i = 0;
    this.displayVocabulary(this.i);

    const flipBtn = this.el.nativeElement.querySelector('.flip-btn') as HTMLElement;
    const resetBtn = this.el.nativeElement.querySelector('.reset-btn') as HTMLElement;
    const skipPrevComputer = this.el.nativeElement.querySelector('.skip-prev') as HTMLElement;
    const skipNextComputer = this.el.nativeElement.querySelector('.skip-next') as HTMLElement;
    const card = this.el.nativeElement.querySelector('.card') as HTMLElement;
    const counter = this.el.nativeElement.querySelector('.counter') as HTMLElement;

    skipPrevComputer.style.display = 'inline-flex';
    skipNextComputer.style.display = 'inline-flex';
    card.style.display = 'block';
    counter.style.display = 'block';
    resetBtn.style.display = 'none';
    

    flipBtn.style.display = 'block';
    flipBtn.style.background = '#03446A;'
    flipBtn.style.color = '#ffffff'
  }

/* Vocabulary Section End*/



/*Quiz Section Start*/


startQuiz(){

  this.quiz_i = 0;
  this.score = 0;

  const answerBtn = this.el.nativeElement.querySelector('.answer-buttons') as HTMLElement;
    const timer = this.el.nativeElement.querySelector('.timer') as HTMLElement;
    const questionCount = this.el.nativeElement.querySelector('.question-count') as HTMLElement;
    const questionText = this.el.nativeElement.querySelector('#question') as HTMLElement;
    const quizContainer = this.el.nativeElement.querySelector('.container-quiz') as HTMLElement;
    const resultContainer = this.el.nativeElement.querySelector('.result-container') as HTMLElement;
    
    
    answerBtn.style.display = "block";
    timer.style.display = "block";
    questionCount.style.display = "block";
    questionText.style.display = "block"
    quizContainer.style.display = "block";
    resultContainer.style.display ="none";
    this.startTimer();
}

  displayQuiz(quiziterator: number){
    this.Question = this.quiz.question[quiziterator].question;
    this.answer[0] = this.quiz.question[quiziterator].answers[0];
    this.answer[1] = this.quiz.question[quiziterator].answers[1];
    this.answer[2] = this.quiz.question[quiziterator].answers[2];
    this.answer[3] = this.quiz.question[quiziterator].answers[3];

  }

  next(event:any){
    
   const optionId = event.target.id;
   this.checkAnswer(optionId);

    setTimeout(() => {
      // Code to execute after the delay
      this.nextQuestion(optionId);
    }, 900);

  }
  checkAnswer(optionId: any) {
    
    if(optionId === 'A'){
      this.optionItr = 0;
    }

    if(optionId === 'B'){
      this.optionItr = 1;
    }

    if(optionId === 'C'){
      this.optionItr = 2;
    }

    if(optionId === 'D'){
      this.optionItr = 3;
    }



     if(this.quiz.question[this.quiz_i].answers[this.optionItr].correct){
      this.score++;
      //Style the elements.
    const buttonElement = this.el.nativeElement.querySelector('#'+optionId) as HTMLElement;
    buttonElement.style.backgroundColor = '#54b689';
    buttonElement.style.color = '#ffffff';
  

    }
    else{
      const buttonElement = this.el.nativeElement.querySelector('#'+optionId) as HTMLElement;
    buttonElement.style.backgroundColor = '#ef6672';
    buttonElement.style.color = '#ffffff';
    }
  }
nextQuestion(optionId: any){
try{ 
  const buttonElement = this.el.nativeElement.querySelector('#'+optionId) as HTMLElement;
    buttonElement.style.backgroundColor = '#ffffff';
    buttonElement.style.color = '#28387a';
}
catch(error){
  console.log("User failed to select answer within the time")

}
  

if(this.quiz_i < this.quiz.question.length){
 // this.quiz_i++;
 const randomIndex = Math.floor(Math.random() * this.quiz.question.length)
 this.quiz_i = randomIndex;
  this.remainingTime = 61;
  this.endTimer();
  this.startTimer();
  if(this.quiz_i >= this.quiz.question.length){
    const answerBtn = this.el.nativeElement.querySelector('.answer-buttons') as HTMLElement;
    const timer = this.el.nativeElement.querySelector('.timer') as HTMLElement;
    const questionCount = this.el.nativeElement.querySelector('.question-count') as HTMLElement;
    const questionText = this.el.nativeElement.querySelector('#question') as HTMLElement;
    const resultContainer = this.el.nativeElement.querySelector('.result-container') as HTMLElement;
    const h3text = this.el.nativeElement.querySelector('.result-container h3') as HTMLElement;
    const buttontext = this.el.nativeElement.querySelector('.result-container button') as HTMLElement;
    
    
    resultContainer.style.display ="block";
    answerBtn.style.display = "none";
    timer.style.display = "none";
    questionCount.style.display = "none";
    questionText.style.display = "none"
    h3text.innerHTML = "YOUR SCORE IS " + "\n" + this.score + " out of " + this.quiz_i;
    buttontext.innerHTML = "Restart"
    this.endTimer();
    
    
  }
  this.displayQuiz(this.quiz_i);

}
}

/* Quiz Timer*/
startTimer(): void {
  this.timerSubscription = this.timerService
    .startTimer(this.remainingTime)
    .subscribe((time) => {
      this.remainingTime = time;
      this.updateProgressBar();
      if(this.remainingTime === 0){
        this.nextQuestion(4);
        }
    });
    
}

updateProgressBar(): void {
  this.progressWidth = (this.remainingTime / 60) * 100;
}

   endTimer(): void {
  if (this.timerSubscription) {
    this.timerSubscription.unsubscribe();
  }
}



}
