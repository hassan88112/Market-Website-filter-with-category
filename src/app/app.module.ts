import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import {TestServiceService} from "./services/test-service.service";
import {FormsModule} from "@angular/forms";
import { PanalComponent } from './components/panal/panal.component';
import { InputFormatDirective } from './directives/input-format.directive';
import {SharedModule} from "./shared/shared.module";
import {CartsModule} from "./carts/carts.module";
import {ProductsModule} from "./products/products.module";
import { TrainingComponent } from './components/training/training.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PanalComponent,
    InputFormatDirective,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    TestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
