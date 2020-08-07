import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartgraphicsComponent } from './chartgraphics/chartgraphics.component';
import { PieComponent } from './chart/pie/pie.component';
import { BarComponent } from './chart/bar/bar.component';
import { LineComponent } from './chart/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartgraphicsComponent,
    PieComponent,
    BarComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
