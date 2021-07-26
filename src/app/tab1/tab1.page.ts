import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { LoadingController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  global: any;
  constructor( public router: Router,public appService: AppService, public loadingController: LoadingController) { }

  ionViewDidEnter() {
    this.getData();
  }

  RedirectToGraphPage(){
    this.router.navigateByUrl('/graph');
  }

  async getData() {

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.appService.getData().subscribe((res) => {
      console.log(res)
      loading.dismiss()
      this.global = res['Global'];
    }, (error) => {

    });

  }

}
