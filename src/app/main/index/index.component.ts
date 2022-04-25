import { Component, OnInit,ViewChild } from '@angular/core';
import { IBarChartOptions, IChartistAnimationOptions, IChartistData } from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';
import * as moment from 'moment';
import { LocaleConfig } from 'ngx-daterangepicker-material';
import { ChartComponent } from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: any;
  labels: any;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  chartOptions:any = {
    series: [44, 55],
    chart: {
      width: 380,
      type: "pie"
    },
    labels: ["Male", "Female"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  //selected!: { start: any, end: any };
  locale: LocaleConfig = {
    applyLabel: 'Appliquer',
    customRangeLabel: ' - ',
    daysOfWeek: moment.weekdaysMin(),
    monthNames: moment.monthsShort(),
    firstDay: moment.localeData().firstDayOfWeek(),
  }
  moment = moment;
  ranges: any;
  constructor() {
    //date picker ranges start
    this.ranges = {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    };
    //date picker ranges end
    
   }

  ngOnInit(): void {
  }
  //date picker start fn
  selectedRange: any = { startDate: moment().add(-1, 'months'), endDate: moment().add(-1, 'months') };
  isStartDate: string = '';
  isEndDate: string = '';
  isSeriesMap: any;
  form: any;
  firstFieldEmittedValue: any;
  isShow = false;
  isRecord: any;
  dateRangePicker: any;
  alwaysShowCalendars: boolean | undefined;
  selected: any = { startDate: null, endDate: null };
  //date picker end fn

 //pie chart start  
  options: IBarChartOptions = {
    stackBars: true,
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0,
      labelInterpolationFnc: (value: any) => {
        return (value / 1000) + 'k';
      }
    }
  };


  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 3px'
        });
      }
    }
  };
  type: ChartType = 'Bar';
  data: IChartistData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
      [400, 900, 800, 1000, 700, 1200, 300],
      [1000, 500, 600, 400, 700, 200, 1100]
    ]
  };

  // other

  series = [{
    data: [821, 222, 510, 328, 116, 1121, 1913]
  }];
  plotOptions = {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  }
  chart: ApexChart = {
    height: 350,
    type: 'bar',
  }
  dataLabels = {
    enabled: false
  }
  legend = {
    show: false
  }
  xaxis = {
    categories: [
      ['Sunday'],
      ['Monday'],
      ['Tuesday'],
      'Wednesday',
      ['Thursday'],
      ['Friday'],
      ['Saturday'],
    ],
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  }
  
  datesUpdated() { 
    
  }
}


