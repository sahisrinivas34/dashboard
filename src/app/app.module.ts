import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MapscomponentComponent } from './mapscomponent/mapscomponent.component';
import { DbserviceService } from './dbservice.service';
import {AgmCoreModule } from '@agm/core';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { } from '@types/googlemaps';
@NgModule({
  declarations: [
    AppComponent,
    MapscomponentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYfE3fKz2sqjeiaPCgsPraGjHCe4Pt7LU'
    })
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
