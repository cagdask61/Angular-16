import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private name: WritableSignal<string> = signal('ÇAĞDAŞ KOCAMAN');

  getName() {
    return this.name();
  }

  setName(value: string) {
    this.name.set(value);
  }

  updateName(value: string) {
    this.name.update((response) => response + " " + value);
  }

}