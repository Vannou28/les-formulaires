import { Component } from '@angular/core';
import { User } from '../class/User';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    user:User = new User("","","","")

    /*submitted: boolean;
    valid: boolean;
    
    constructor(){
        this.submitted = false;
        this.valid = false;
    }*/


    onSubmit(){
        console.log(this.user);
       

    }

}
