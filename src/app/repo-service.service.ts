import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root',
})
export class RepoServiceService {
  user: User;
  repos: Repos;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', 0, 0, new Date(), 0, '');
    this.repos = new Repos('', '', '', new Date(), new Date(), 0, '');
  }
  searchUsers(searchTerm: string) {
    interface ApiResponse {
      avatar_url: string;
      bio: string;
      login: string;
      company: string;
      location: string;
      name: string;
      followers: number;
      following: number;
      created_at: Date;
      public_repos: number;
      html_url: string;
      email: string;
    }
    let searchUser =
      'https://api.github.com/users/' +
      searchTerm +
      '?access_token=' +
      environment.ApiKey;
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(searchUser)
        .toPromise()
        .then(
          (results) => {
            this.user = results;

            resolve();
          },
          (error) => {
            console.log(error);

            reject();
          }
        );
    });
    return promise;
  }
  getPublicRepos(searchTerm) {
    interface ApiResponse {
      name: string;
      description: string;
      html_url: string;
      updated_at: Date;
      created_at: Date;
      stargazers_count: number;
      watchers_count: number;
      language: string;
    }
    let searchUser =
      'https://api.github.com/users/' +
      searchTerm +
      '/repos?access_token=' +
      environment.ApiKey;
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(searchUser)
        .toPromise()
        .then(
          (reposResults) => {
            this.repos = reposResults;

            resolve();
          },
          (error) => {
            console.log(error);

            reject();
          }
        );
    });
    return promise;
  }
}
