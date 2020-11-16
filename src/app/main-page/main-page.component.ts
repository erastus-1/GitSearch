import { Component, OnInit } from '@angular/core';
import { RepoServiceService } from '../repo-service.service';
import { Repos } from '../repos';
import { User } from '../user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  user: User;
  repos: Repos;
  mySubscription: Subscription;

  constructor(private repoServiceService: RepoServiceService) {

  }
    
ngOnDestroy(): void{
  this.mySubscription.unsubscribe();
}

  searchUser(searchTerm) {
    this.repoServiceService.searchUsers(searchTerm).then(
      (success) => {
        this.user = this.repoServiceService.user;
      },
      (error) => {
        console.log(error);
      }
    );

    this.repoServiceService.getPublicRepos(searchTerm).then(
      (success) => {
        this.repos = this.repoServiceService.repos;
        // console.log(JSON.stringify(this.repos))
      },
      (error) => {
        console.log(error);
      }
    );
  
  
  }

  ngOnInit(): void {
    this.searchUser('erastus-1');
  }
}
