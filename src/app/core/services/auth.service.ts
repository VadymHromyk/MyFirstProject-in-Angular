import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {environment} from 'src/environments/environment'
import {ResultCodes} from '../enums/core.enums'
import {MeResponse} from '../models/core.model'

@Injectable()
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient) {}

  me() {
    this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCodes.success) {
        this.isAuth = true
      }
    })
  }
}
