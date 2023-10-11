import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormComponent } from './form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PersonComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    ChatWindowComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
