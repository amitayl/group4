import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { BigPicComponent } from './components/big-pic/big-pic.component';
import { TopPicsComponent } from './components/top-pics/top-pics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageComponent,
    BigPicComponent,
    TopPicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
