import ProductModel from "../../productRepository/models/ProductModel";

export default class MenuCategoryModel {

    categoryId: string = "";
    name: string = "";
    imageFull: string = "";
    imageThumbnail: string = "";

    products : Array<ProductModel> = new Array<ProductModel>();    
    categories : Array<MenuCategoryModel> = new Array<MenuCategoryModel>();    

    constructor(cateogryId: string, name: string ) {
        this.categoryId = cateogryId;
        this.name = name;
    }

}