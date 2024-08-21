import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TopbarComponent,
    FooterComponent
  ]
})
export class LibraryModule { }
