import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {ProductsModule} from "../products/products.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { SpannerComponent } from './components/spanner/spanner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SpannerComponent,



  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,


  ],
  exports :[
    HeaderComponent,
    SpannerComponent
  ]
})
export class SharedModule { }
