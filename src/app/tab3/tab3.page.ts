
import { Component , ViewChild} from '@angular/core';
import { AppService } from '../app.service';
import { LoadingController } from '@ionic/angular'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  

  constructor(public formBuilder: FormBuilder, public router: Router,public appService: AppService, public loadingController: LoadingController) {
    this.slideOneForm = formBuilder.group({
   firstName: [''],
      lastName: [''],
      age: [''],
      emailaddress: [''],
      date: [''],
      city: [''],
      totalcases: [''],
        });
       
        
     
  }

  @ViewChild('signupSlider') signupSlider;

	public slideOneForm: FormGroup;


	public submitAttempt: boolean = false;

    



    save(){

    }

}
 

 


