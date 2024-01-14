import { Injectable } from '@angular/core';
import { Observable, Subject, map, take, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  
  startTimer(duration: number): Observable<number> {
    return timer(0, 1000).pipe(
      take(duration),
      map((time) => duration - time - 1)
    );
  }

  
}
