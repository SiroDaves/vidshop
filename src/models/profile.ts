export class Profile {
    private userid: string;
    private phone: string;
    private bio: string;
    private address: string;
    private dobirth: string;
    private lastseen: string;

    constructor(userid: string, phone: string, bio: string, address: string, dobirth: string, lastseen: string) {
        this.userid = userid;
        this.phone = phone;
        this.bio = bio;
        this.address = address;
        this.dobirth = dobirth;
        this.lastseen = lastseen;
    }

}
