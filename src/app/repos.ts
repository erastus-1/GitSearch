export class Repos {

    constructor(
        public name: string,
        public html_url: string,
        public description: string,
        public updated_at: Date,
        public created_at: Date,
        public watchers_count: number,
        public language: string
      ) {}
}
