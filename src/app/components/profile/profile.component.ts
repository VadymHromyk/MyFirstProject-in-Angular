import {Observable} from 'rxjs'
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {ProfileResponse, ProfileService} from 'src/app/services/profile.service'

@Component({
  selector: 'project-one-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<ProfileResponse>
  constructor(private route: ActivatedRoute, private profileService: ProfileService) {}
  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'))
    if (userId) {
      this.profile$ = this.profileService.getProfile(userId)
    }
  }
}
