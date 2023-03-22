import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'confirmEmail': new FormControl(null, [Validators.required, Validators.email]),
      'addresses': new FormArray([
        new FormControl(null)
      ])
    });
  }
  onSubmit() {
    console.log(this.myForm);
  }
}
