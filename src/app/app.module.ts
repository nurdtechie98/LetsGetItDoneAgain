import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { AppendStringPipe } from './append-string.pipe';
import { CustomLowercasePipe } from './custom-lowercase.pipe'
import { LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestDirectiveDirective } from './test-directive.directive';
import { TestStructuralDirectiveDirective } from './test-structural-directive.directive';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ReverseStringPipe,
    AppendStringPipe,
    CustomLowercasePipe,
    TestDirectiveDirective,
    TestStructuralDirectiveDirective,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    GenericFormComponent,
    StoreComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LowerCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
