export class DetalleUsuario {
    constructor(
        public login: string,
        public id: string,
        public avatar_url: string,
        public company: string,
        public location: string,
        public public_repos: string,
        public followers: string,
        ) {}
    }