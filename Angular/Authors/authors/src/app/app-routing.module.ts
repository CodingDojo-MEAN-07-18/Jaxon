import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsIndexComponent } from './authors/authors-index/authors-index.component';
import { AuthorsNewComponent } from './authors/authors-new/authors-new.component';
import { AuthorsEditComponent } from './authors/authors-edit/authors-edit.component';
import { ViewComponent } from './authors/view/view.component';

const routes: Routes = [
  { path: 'index', component: AuthorsIndexComponent },
  { path: 'new', component: AuthorsNewComponent },
  { path: ':id/edit', component: AuthorsEditComponent },
  { path: ':id/view', component: ViewComponent },
  { path: '', pathMatch: 'full', redirectTo: '/index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


