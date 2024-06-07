import { Component } from '@angular/core';
import { FormControl, Validators,FormBuilder, NgForm, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  formData: any = {};
  showMessageFlag: boolean = false;
  username: any = "";
  email: any = "";
  password: any = "";

  registerUser(formData: NgForm) {
    this.formData = formData.value;
    this.showMessageFlag = true;
  }
  // ----------------------------------------

  loginForm!: FormGroup;
  showMessage: boolean = false;
  formDataTwo: any = {};

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, this.exclamationValidator]]
    });
  }

  registerUser2() {
    if (this.loginForm.valid) {
      this.showMessage = true;
      this.formDataTwo = this.loginForm.value;
    }
  }

  exclamationValidator(control: any) {
    const hasExclamation = control.value.includes('!');
    return hasExclamation ? null : { needsExclamation: true };
  }





}
