import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/top-navbar/navbar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from './components/home/side-nav/side-nav.component';
import { SideNavDesktopComponent } from './components/home/side-nav-desktop/side-nav-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SideNavComponent,
    SideNavDesktopComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
