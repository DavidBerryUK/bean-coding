
export default class MenuItemModel {
    public id: string;
    public name : string;
    public icon? : React.ReactElement;    
    public route : string;
    public children : Array<MenuItemModel>;
        
    constructor(    
        id: string,
        name : string,
        route : string,
        icon? : React.ReactElement) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.route = route;
        this.children = new  Array<MenuItemModel>();
    }

    add(menu : MenuItemModel) {
        this.children.push(menu);
    }    
}