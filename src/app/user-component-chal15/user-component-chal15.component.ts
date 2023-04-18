import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { UserProfile } from '../class/UserProfile';
import { passwordValidator } from '../password-validator';
import { emailValidator } from '../email-validator';

@Component({
  selector: 'app-user-component-chal15',
  templateUrl: './user-component-chal15.component.html',
  styleUrls: ['./user-component-chal15.component.css']
})
export class UserComponentChal15Component {

    user :UserProfile = new UserProfile("","","","","","");
    isSave : boolean= false;

    userForm = new FormGroup({
        credentials: new FormGroup({
            username: new FormControl('',[Validators.required, Validators.minLength(4)]),
            email: new FormControl('',[Validators.required, emailValidator]),
            mdp: new FormControl('',[Validators.required, passwordValidator]),
        }),
                
        address: new FormGroup({
            adress: new FormControl(''),
            cp: new FormControl(''),
            city: new FormControl('')
        }),
    });


    onSubmit() {
        console.log(this.userForm.value);
        console.log("this.userForm.value.credentials?.username");
        this.isSave = true;
        this.user = new UserProfile(
            this.userForm.value.credentials?.username,
            this.userForm.value.credentials?.email,
            this.userForm.value.credentials?.mdp,
            this.userForm.value.address?.adress,
            this.userForm.value.address?.cp,
            this.userForm.value.address?.city
            );
            console.log(this.user);
    }
}
