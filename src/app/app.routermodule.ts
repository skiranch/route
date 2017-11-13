import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

const route:Routes=[
  {path:"",component:AppComponent, pathMatch:"full"},
  {path:"RetailerHome",component:AppComponent},
  {path:"Galleries",component:BodyComponent},
  {path:"Header",component:HeaderComponent}
]

@NgModule({

    imports:[ RouterModule.forRoot(route)],

    exports:[RouterModule],
})

export class RouteModule{}
export const routingComponents =[BodyComponent,HeaderComponent, MenuComponent]