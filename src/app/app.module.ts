import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouteModule} from './app.routermodule';
import {routingComponents} from './app.routermodule';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
