export class User {

    constructor(
        public avatar_url: string,
        public bio: string,
        public login:string,
        public  name: string,
        public followers: number,
        public following: number,
        public created_at: Date,
        public public_repos: number,
        public html_url: string,
    ){}
}