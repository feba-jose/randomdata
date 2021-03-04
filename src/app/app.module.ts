import { SampleService } from './sample.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { NgDygraphsModule } from 'ng-dygraphs';
import { NgDygraphsComponent } from './ng-dygraphs/ng-dygraphs.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    NgDygraphsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgDygraphsModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
