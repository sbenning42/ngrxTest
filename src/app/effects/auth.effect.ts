import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType('RESET'),
    mergeMap(action =>
      this.http.post('/auth', (action as any).payload).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: 'INCREMENT', payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: 'DECREMENT' }))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}