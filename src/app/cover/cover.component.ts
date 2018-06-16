import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('#testing').click(function(){
          console.log('testing...........')
          alert('hi')
      })
      $('#return-to-top').click(function(){
          alert('hi')
      });
      $('#return-to-top').hide();
      $(window).scroll(function () {
          var scrollval = $(window).scrollTop();
          if(scrollval > 100) {
              $('#return-to-top').fadeIn('slow');
          }
          else {
              $('#return-to-top').fadeOut('fast');
          }
      })
  }



  arrowClick(event) {
      window.scroll({
          top: 0,
          behavior: 'smooth'
      });

  }
}
