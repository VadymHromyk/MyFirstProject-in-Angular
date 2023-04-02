import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingRoutingModule} from './app-routing-routing.module'

import {AppComponent} from './app.component'
import {FormsComponent} from './components/forms/forms.component'
import {HomeComponent} from './components/home/home.component'
import {LoginComponent} from './components/login/login.component'
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component'
import {ProfileComponent} from './components/profile/profile.component'
import {TodosComponent} from './components/todos/todos.component'
import {UsersComponent} from './components/users/users.component'
import {CredentialsInterceptor} from './interceptors/credentials.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FormsComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProfileComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingRoutingModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
