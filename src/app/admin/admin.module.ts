import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin.component';
import { MatTableModule } from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule
  ]
})
export class AdminModule { }