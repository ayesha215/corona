import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  @ViewChild('mySlider')  slides: IonSlides;
 
 
  constructor() { }

  ngOnInit() {
  }
  
  swipeNext(){
    this.slides.slideNext();
  }
}
