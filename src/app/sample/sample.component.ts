import { SampleService } from './../sample.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  public sampledata = [];
 public errorMsg;
  constructor(private _sampleservice:SampleService) { }

  ngOnInit() {
    this._sampleservice.getSampledata()
    .subscribe(data =>this.sampledata =data,
      error=>this.errorMsg =error);
  }

}
