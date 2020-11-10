import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../../service/common-service.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  noteForm: FormGroup;
  isSubmitted:boolean;
  constructor( private fb: FormBuilder, private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.formValidation();

  }

  get subject(){
    return this.noteForm.get('subject');
  }

  get description(){
    return this.noteForm.get('description');
  }

  formValidation(){
    this.noteForm = this.fb.group({
      subject:['',[Validators.required,Validators.maxLength(30)]],
      description:['',[Validators.required,Validators.maxLength(200)]]
    });
  }

  formSubmit(){
    this.isSubmitted = true;
    if(this.noteForm.valid){
      console.log("noteForm Value :",this.noteForm.value);
      this.commonService.addNote(this.noteForm.value);
      this.isSubmitted = false;
      this.noteForm.reset();
      alert("Note Added");
    }
  }

}
