import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { AppService } from '../app.service';
import { LoadingController } from '@ionic/angular'
import { Router } from '@angular/router';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage  {
  @ViewChild('barChart',null) barChart;
  @ViewChild('horizontalBar', null) horizontalBarChart: any;
  @ViewChild('pieChart',null) pieChart;
  bars: any;
  global:any;
  data:any;
  horizontalBar: any;
   pie:any  
  colorArray: any[];

  constructor(public router: Router,public appService: AppService, public loadingController: LoadingController) { 

    
    }
    ionViewDidEnter() {
      this.getData();
    }


 async getData() {
  const loading = await this.loadingController.create({
    message: 'Loading...',
    duration: 10000
  });
  await loading.present();
  this.appService.getData().subscribe(res => {
    this.data = res;
    this.global = this.data['Global'];
    this.createBarChart();
   this.createHorizontalBarChart();
    this.createPieChart();
    loading.dismiss();
  }, (error) => {
    loading.dismiss();
  });
}


generateColorArray(num) {
  this.colorArray = [];
  for (let i = 0; i < num; i++) {
    this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
  }
}


createBarChart() {
  this.bars = new Chart(this.barChart.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths'],
      datasets: [{
        label: 'Graph of Total',
        data: [this.global.TotalConfirmed, this.global.TotalRecovered, this.global.TotalDeaths],
        backgroundColor: 'rgba(54, 162, 235)',// array should have same number of elements as number of dataset
        borderColor:' rgba(54, 162, 235)',// array should have same number of elements as number of dataset
        borderWidth: 3
      }]
    },
    options: {
      scales: {  
        stack: true,


        yAxes: [{
          ticks: {
            beginAtZero: true,
           
          }
        }]
      }
    }
  });


}
createHorizontalBarChart() {
  this.horizontalBar = new Chart(this.horizontalBarChart.nativeElement, {
    type: 'horizontalBar',
    data: {
      labels: ['Cases', 'Recovered', 'Deaths'],
      datasets: [{
        label: 'Total',
        data: [this.global.TotalConfirmed, this.global.TotalRecovered, this.global.TotalDeaths],
        backgroundColor: '#fca330', // array should have same number of elements as number of dataset
        borderColor: '#fca330',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'New',
        data: [this.global.NewConfirmed, this.global.NewRecovered, this.global.NewDeaths],
        backgroundColor: '#fc2205', // array should have same number of elements as number of dataset
        borderColor: '#fc2205',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
    },
  });
}

createPieChart() {
  this.pie = new Chart(this.pieChart.nativeElement, {
    type: 'pie',
    data: {
      labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths'],
      datasets: [{
        label: 'Graph of Total',
        data: [this.global.TotalConfirmed, this.global.TotalRecovered, this.global.TotalDeaths],
        backgroundColor: ["#3a7be0", "#ffd534","#ee6322"] ,// array should have same number of elements as number of dataset
        borderColor: ["#3a7be0", "#ffd534","#ee6322"] ,// array should have same number of elements as number of dataset
        borderWidth: 2
      }]
    },
    options: {
      scales: {  
        stack: true,


        
      }
    }
  });


}  

}
