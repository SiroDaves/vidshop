export class Category {
    private parentid: Number;
    private title: string;
    private description: string;
    private icon: string;

    constructor(parentid: Number, title: string, description: string, icon: string ) {
        this.parentid = parentid;
        this.title = title;
        this.description = description;
        this.icon = icon;
    }

}
