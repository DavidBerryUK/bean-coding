import ProductModel                             from "../../repository/productRepository/models/ProductModel";
import RecipeModel                              from "../../repository/productRepository/models/RecipeModel";
import SelectionCollection                      from "../../repository/productRepository/models/selections/SelectionCollection";

/**
 * This service setups the inital settings based up the
 * product, recipe list and selected product size
 */
export default class ProductSelectionInitialiseService {

    initialiseSelection(product : ProductModel) {
        console.log('ProductSelectionInitialiseService - initialiseSelection');
        this.clearSelection(product);
        this.parseRecipe(product);
        
    }

    private clearSelection(product : ProductModel) {
        product.selections = new SelectionCollection();
    }

    private parseRecipe(product : ProductModel) {
        if ( product.selectedSize === null ) {
            return;            
        }
        product.selectedSize?.recipeList.forEach((recipeItem: RecipeModel) => {
            this.createSelectionItem(product, recipeItem);
        })
    }

    private createSelectionItem(product : ProductModel, recipeItem: RecipeModel) {
        console.log(`Setup ${recipeItem.name}   ${recipeItem.productNumber}   ${recipeItem.quantity}`);
    
    }

}