import { EnumTopLevelRoutes }                   from '../../routes/TopLevelRouteConstants';

export default class MenuModel {
    public id: number;
    public name : string;
    public icon : React.ReactElement;    
    public route : EnumTopLevelRoutes;
        
    constructor(    
        id: number,
        name : string,
        icon : React.ReactElement,
        route : EnumTopLevelRoutes ) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.route = route;
    }
}