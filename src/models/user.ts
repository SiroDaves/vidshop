export class User {
    private username: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    private password: string;
    
    constructor( username: string,firstname:string, lastname: string, email: string, password:string ){
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    
}
