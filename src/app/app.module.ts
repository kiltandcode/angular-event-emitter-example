import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveNewToDoComponent } from './components/save-new-to-do/save-new-to-do.component';
import { ToDoListService } from './services/to-do-list.service';

@NgModule({
  declarations: [
    AppComponent,
    SaveNewToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ToDoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
