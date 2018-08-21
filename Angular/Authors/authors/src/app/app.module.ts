import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorsIndexComponent } from './authors/authors-index/authors-index.component';
import { AuthorsNewComponent } from './authors/authors-new/authors-new.component';
import { AuthorsEditComponent } from './authors/authors-edit/authors-edit.component';
import { ViewComponent } from './authors/view/view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AuthorsEditComponent,
    AuthorsIndexComponent,
    AuthorsNewComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
