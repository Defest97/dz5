import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { CityMonumentComponent } from './city-monument/city-monument.component';
import { CityAnotherMonumentsComponent } from './city-another-monuments/city-another-monuments.component';
import { CityPhotosComponent } from './city-photos/city-photos.component';
import { RouterModule } from '@angular/router';
import { photosGuard } from './photos.guard';

const routes=[
  {
    path:'',component:CityInfoComponent
  },
  {
    path:'mainMonument',component:CityMonumentComponent,children:[
      {
        path:'anotherMonuments',component:CityAnotherMonumentsComponent
      }
    ]
  },
  {
    path:'photos',component:CityPhotosComponent,canActivate:[photosGuard]
  },
  {
    path:'photos/:id',component:CityPhotosComponent,canActivate:[photosGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CityInfoComponent,
    CityMonumentComponent,
    CityAnotherMonumentsComponent,
    CityPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
