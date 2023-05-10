export class Category {
    private parentid: string;
    private title: string;
    private description: string;
    private icon: string;

    constructor(parentid: string, title: string, description: string, icon: string ) {
        this.parentid = parentid;
        this.title = title;
        this.description = description;
        this.icon = icon;
    }

}
