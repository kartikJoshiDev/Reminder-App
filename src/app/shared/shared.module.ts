import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';

@NgModule({
  declarations: [PageNotFound404Component, FilterBoxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PageNotFound404Component,
    FilterBoxComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
