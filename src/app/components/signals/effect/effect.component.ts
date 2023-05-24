import { Component, effect, inject } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-effect',
  standalone: true,
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.scss'],
  imports: [
    MatButtonModule, MatInputModule,MatFormFieldModule
  ]
})
export default class EffectComponent {

  readonly stateService: StateService = inject(StateService);

  constructor() {
    effect(() => {
      console.log("effect", this.stateService.getName());
    });
  }

  setValue(value: string) {
    this.stateService.setName(value);
  }

  updateValue(value: string) {
    this.stateService.updateName(value);
  }

}