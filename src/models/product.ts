export class Product {
    private categoryid: string;
    private title: string;
    private description: string;
    private features: string;
    private video: string;
    private price: number;
    private discount: number;

    constructor(categoryid: string, title: string, description: string, features: string, video: string, price: number, discount: number) {
        this.categoryid = categoryid;
        this.title = title;
        this.description = description;
        this.features = features;
        this.video = video;
        this.price = price;
        this.discount = discount;
    }

}
