import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingRoutingModule} from './app-routing.module'

import {CoreModule} from '../core/core.module'
import {HomeModule} from '../home/home.module'
import {AppComponent} from './app.component'
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component'
import {SharedModule} from './shared.module'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingRoutingModule,
    SharedModule,
    CoreModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
