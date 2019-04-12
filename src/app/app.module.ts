import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './service/product.service';
import { EventBusManagerService } from './service/event-bus-manager';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelDialogComponent } from './products/model-dialog/model-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    ModelDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent }
    ])
  ],
  providers: [
    ProductService,
    EventBusManagerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
