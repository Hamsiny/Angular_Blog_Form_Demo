import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FormComponent } from './components/form/form.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestImageComponent } from './components/test-image/test-image.component';
import {NgxImageCompressService} from "ngx-image-compress";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogsComponent,
    FormComponent,
    BlogComponent,
    BlogDetailComponent,
    TestImageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent],
})
export class AppModule {}
