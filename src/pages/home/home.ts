import { Component } from '@angular/core';
import { SampleServiceProvider } from'../../providers/sample-service/sample-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   title: string = "My Page";
   answer: any = "..."
  constructor(public sampleService:SampleServiceProvider) {

  }
  changeTitle(title){
        this.title = title;
    }

    showAnswer(){
    this.answer = this.sampleService.getRandomAnswer();
  }
}
