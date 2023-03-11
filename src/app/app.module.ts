import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component'
import {TodosComponent} from './components/todos/todos.component'
import {FormsComponent} from './components/forms/forms.component'

@NgModule({
  declarations: [AppComponent, TodosComponent, FormsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
