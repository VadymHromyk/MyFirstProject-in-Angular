import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AuthService} from './services/auth.service'
import {ErrorService} from './services/error.service'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {CredentialsInterceptor} from './interceptors/credentials.interceptor'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    ErrorService,
    {provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true},
  ],
})
export class CoreModule {}
