import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  noteForm: FormGroup;
  isSubmitted:boolean;
  private note:any;
  index:number;

  constructor(private fb: FormBuilder, private route:ActivatedRoute, private commonService:CommonServiceService,private _location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.note=params;
    });
    this.formValidation();
    this.provideNote();
    this.showValue();
  }

  formValidation(){
    this.noteForm = this.fb.group({
      subject:['',[Validators.required,Validators.maxLength(30)]],
      description:['',[Validators.required,Validators.maxLength(200)]]
    });
  }

  get subject(){
    return this.noteForm.get('subject');
  }

  get description(){
    return this.noteForm.get('description');
  }

  provideNote(){
    this.index = this.commonService.getNoteIndex(this.note);
    console.log("Index : ",this.index);
  }

  showValue(){
    this.noteForm.patchValue({subject:this.note.subject,description:this.note.description});
  }

  formSubmit(){
    this.isSubmitted = true;
    if(this.noteForm.valid){
      this.commonService.updateNote(this.noteForm.value,this.index);
      this._location.back();
      this.isSubmitted = false;
    }
  }

  cancelBack(){
    this._location.back();
  }

}
