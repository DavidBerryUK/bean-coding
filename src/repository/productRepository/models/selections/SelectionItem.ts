export default class SelectionItem {
    productId: number;
    name: string;
    recipeQuantity: number;
    quantity: number;

    constructor(productId: number,name: string,recipeQuantity:number) {
        this.productId = productId;
        this.name = name;
        this.recipeQuantity = recipeQuantity;
        this.quantity = recipeQuantity;
    }
}