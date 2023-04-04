import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingRoutingModule} from './app-routing.module'

import {AuthModule} from '../auth/auth.module'
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component'
import {HomeModule} from '../home/home.module'
import {ProfileModule} from '../profile/profile.module'
import {TodosModule} from '../todos/todos.module'
import {UsersModule} from '../users/users.module'
import {AppComponent} from './app.component'
import {SharedModule} from './shared.module'
import {CoreModule} from '../core/core.module'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingRoutingModule,
    SharedModule,
    CoreModule,
    HomeModule,
    UsersModule,
    TodosModule,
    ProfileModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
