import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {

  @Input('searchSubject') searchNote: string;
  @Output() filterValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchContent(){
    console.log('Value : ',this.searchNote);
    this.filterValue.emit(this.searchNote);

  }



}
