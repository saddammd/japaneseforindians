import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendconnectionService {

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  private display = new BehaviorSubject<string>('none');

  isLoading$ = this.isLoadingSubject.asObservable();
  isdisplay$ = this.display.asObservable();

   // Function to update the loading state
   setLoadingState(isLoading: boolean, display:string): void {
    this.isLoadingSubject.next(isLoading);
    this.display.next(display);
  }

  
}
