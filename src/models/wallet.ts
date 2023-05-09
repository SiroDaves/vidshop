export class Wallet {
    private userid: Number;
    private title: string;
    private amount: Number;

    constructor(userid: Number, title: string, amount: Number ) {
        this.userid = userid;
        this.title = title;
        this.amount = amount;
    }

}
