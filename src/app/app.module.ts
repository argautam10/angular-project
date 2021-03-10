import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuIconsExample } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MenuIconsExample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule,
    MatIconModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTooltipModule
    

  ],
  providers: [],
  bootstrap: [AppComponent,MenuIconsExample]
})
export class AppModule { }
