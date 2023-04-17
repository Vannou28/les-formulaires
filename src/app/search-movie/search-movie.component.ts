import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {

    signInForm = new FormGroup({
        Identifiant: new FormControl(''),
        Titre: new FormControl(''),
        Type: new FormArray([
            new FormControl('movie'),
            new FormControl('serie'),
            new FormControl('episode'),
        ]),
        AnneeDeSortie: new FormControl(''),
        Fiche : new FormArray([
            new FormControl('complete'),
            new FormControl('short'),
        ]),
      });


}
