import {SharedService} from 'src/app/shared.service';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timetracker';
  PostTimeData: {
    "commandType": number,
    "userId": number,
    "projectId": number,
    "serviceId": number
  }


  constructor(private service:SharedService) { }

  // timestart(){
  //   this.PostTimeData = {commandType: 1, userId:1, projectId:1, serviceId:1}
  //   this.service.postTime(this.PostTimeData);
  // }

  // timeLeft: number = 1;
  // interval;

// startTimer() {
//     this.interval = setInterval(() => {
//       if(this.timeLeft > 0) {
//         this.timeLeft++;
//       } else {
//         this.timeLeft = 1;
//       }
//     },1000)
//   }

//   pauseTimer() {
//     clearInterval(this.interval);
//   }

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');

  timer: number;
  interval;


  startTimer(duration: number) {
    this.timer = duration * 60;
    this.interval = setInterval (() =>{
      this.updateTimeValue()
    }, 1000)
  }

  updateTimeValue() {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    ++this.timer;

    if (this.timer < 0) {
       this.startTimer(seconds);
    }

  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}

 




