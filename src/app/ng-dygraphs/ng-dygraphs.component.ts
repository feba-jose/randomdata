import { Component, OnInit } from '@angular/core';
import Dygraph from 'dygraphs';

@Component({
  selector: 'app-ng-dygraphs',
  templateUrl: './ng-dygraphs.component.html',
  styleUrls: ['./ng-dygraphs.component.css']
})
export class NgDygraphsComponent implements OnInit {
  ngOnInit(): void {



  var data = [];
  var t = new Date();
  for (var i = 10; i >= 0; i--) {
    var x = new Date(t.getTime() - i * 1000);
    //data.push([x, Math.random()]);
    data.push([x, Math.floor(Math.random() * 90)]);
  }

  var g = new Dygraph(document.getElementById("div_g"), data,
                      {
                        drawPoints: true,
                        showRoller: true,
                        valueRange: [10, 100],
                        color: '#4292c6',
                        labels: ['Time', 'value'],
                    //  strokeWidth: 2,
                    //  showRangeSelector: true


                      });
  setInterval(function() {
    var x = new Date();
    var y = Math.floor(Math.random()*90);
    data.push([x, y]);
    data.shift();
    g.updateOptions( { 'file': data } );
  }, 2000);



  }

}
