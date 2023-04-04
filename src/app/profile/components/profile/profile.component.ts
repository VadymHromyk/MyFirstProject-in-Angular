import {Observable} from 'rxjs'
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {ProfileResponse, ProfileService} from 'src/app/profile/services/profile.service'

@Component({
  selector: 'project-one-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<ProfileResponse>
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService
  ) {}
  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'))
    if (userId) {
      this.profile$ = this.profileService.getProfile(userId)
    }
  }

  backToUsersHandler() {
    this.router.navigate(['/users'])
  }
}
