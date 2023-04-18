import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserProfile } from '../class/UserProfile';

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
            email: new FormControl(''),
            mdp: new FormControl(''),
        }),
        username: new FormControl(''),
        adress: new FormControl(''),
        cp: new FormControl(''),
        city: new FormControl(''),
    });


    onSubmit() {
        this.isSave = true;
        this.user = new UserProfile(
            this.userForm.value.username,
            this.userForm.value.credentials?.email,
            this.userForm.value.credentials?.mdp,
            this.userForm.value.adress,
            this.userForm.value.cp,
            this.userForm.value.city
            );
            console.log(this.user);
    }
}
