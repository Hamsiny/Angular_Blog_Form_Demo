import { TestImageComponent } from './components/test-image/test-image.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'form', component: FormComponent },
  { path: 'testImage', component: TestImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
