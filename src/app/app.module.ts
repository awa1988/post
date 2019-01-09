import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent, NgbdModalContent } from './app.component';
import { SearchPipe } from './searchPipe';
import { PostService } from './post.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [NgbdModalContent],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
