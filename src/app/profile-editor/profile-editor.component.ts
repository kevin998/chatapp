import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs';
import { Service } from '../service';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent {

  constructor(private fb: FormBuilder, private service: Service) { }

  count = 0;

  get persons() {
    return this.profileForm.get('persons') as FormArray;
  }

  sendMessage(i:number,message:string,input:HTMLTextAreaElement){
    i++;
    this.service.setData({person:"Person "+i.toString(),message:message});
    input.value="";
  }

  addPerson() {
    this.count++;
    if (this.count < 9) this.persons.push(this.fb.control('',Validators.required));
  }

  profileForm = this.fb.group({
    persons: this.fb.array([
      this.fb.control('',Validators.required),
    ])
  });

}