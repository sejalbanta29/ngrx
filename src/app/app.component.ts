import { Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-ngrx';
  @ViewChild ('f') signup="NgForm";
  
  constructor(private router: Router) {}


  onSubmit(){

  this.router.navigate(['/dashboard']);
  }
}