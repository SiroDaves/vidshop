export class User {
    private username: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    private password: string;
    private role: number;

    constructor(username: string, firstname: string, lastname: string, email: string, password: string, role: number) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
    }

}
