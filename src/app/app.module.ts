import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component'
import {Test1Component} from './components/test1/test1.component'
import {ParentComponent} from './parent/parent.component'
import {ChildComponent} from './parent/child/child.component'
import {Test2Component} from './components/test2/test2.component'
import {TodosComponent} from './components/todos/todos.component'
import {FormsComponent} from './components/forms/forms.component'

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    ParentComponent,
    ChildComponent,
    Test2Component,
    TodosComponent,
    FormsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
