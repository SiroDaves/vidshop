export class Product {
    private categoryid: Number;
    private title: string;
    private description: string;
    private features: string;
    private video: string;
    private price: Number;
    private discount: Number;

    constructor(categoryid: Number, title: string, description: string, features: string, video: string, price: Number, discount: Number) {
        this.categoryid = categoryid;
        this.title = title;
        this.description = description;
        this.features = features;
        this.video = video;
        this.price = price;
        this.discount = discount;
    }

}
