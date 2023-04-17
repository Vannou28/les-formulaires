import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserComponentChal15Component } from './user-component-chal15/user-component-chal15.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SearchMovieComponent,
    UserComponentComponent,
    UserComponentChal15Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
