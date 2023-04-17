import { FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserProfile } from '../class/UserProfile';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {

    user :UserProfile = new UserProfile("","","","","","");
    isSave : boolean= false;


    username = new FormControl('vannou',Validators.required);
    email = new FormControl('vannier.vannou@gmail.com');
    mdp = new FormControl('klqHGSFK');
    adress = new FormControl('rue de la forge');
    cp = new FormControl('45000');
    city = new FormControl('ORLEANS');

    SaveProfile() {
        this.isSave = true;
        this.user = new UserProfile(this.username.value,this.email.value,this.mdp.value,this.adress.value,this.cp.value,this.city.value);

    }
}
