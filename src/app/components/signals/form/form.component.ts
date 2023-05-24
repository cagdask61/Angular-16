import { Component, effect } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from '@angular/material/checkbox';

import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [
    ReactiveFormsModule, FormsModule, JsonPipe,
    MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule
  ],
})
export default class FormComponent {

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    status: new FormControl(true, [Validators.required]),
  });

  userFormValueChanges = toSignal(this.userForm.valueChanges, { initialValue: { firstName: '', lastName: '', status: false } });

  constructor() {
    effect(() => {
      console.log(this.userFormValueChanges());
    });
  }

  add() {
    console.log(this.userForm.value);
  }
}