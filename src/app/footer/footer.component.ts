// import { Component, OnInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import 'fullcalendar';
import * as moment from 'moment';


declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    // calendarOptions: Options;  //  ++ for calendar
    // @ViewChild(CalendarComponent) ucCalendar: CalendarComponent; //  ++ for calendar

    constructor() { }

    ngOnInit() {
        $('#calendar').fullCalendar({});

    }


}
