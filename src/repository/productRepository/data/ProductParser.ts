import { EnumOptionSelectType }                 from '../enum/ProductEnums';
import * as productJson                         from './products.json'
import NutritionAdditionalModel                 from "../models/NutritionAdditionalModel";
import NutritionModel                           from "../models/NutritionModel";
import ProductEnums                             from '../enum/ProductEnums';
import ProductModel                             from "../models/ProductModel";
import ProductOptionModel                       from "../models/ProductOptionModel";
import ProductOptionSizeModel                   from "../models/ProductOptionSizeModel";
import ProductSizeModel                         from "../models/ProductSizeModel";
import RecipeItemModel                          from "../models/RecipeItemModel";


export default class ProductParser {

    parseProducts(): Array<ProductModel> {
        var products = new Array<ProductModel>();

        productJson.products.forEach((productJson) => {
            var product = this.extractProduct(productJson);
            products.push(product);
        });

        return products;
    }

    private extractProduct(json: any): ProductModel {
        var product = new ProductModel();
        product.name = json.name;
        product.productNumber = json.productNumber;
        product.description = json.description;
        product.filenameThumbnail = json.assets.thumbnail.large.filename;
        product.filenameLarge = json.assets.fullSize.filename;
        product.sizes = this.extractProductSizeNodeList(json.sizes);
        product.options = this.extractProductOptionNodeList(json.productOptions)        

        return product;
    }

    private extractProductOptionNodeList(json : any) : Array<ProductOptionModel> {
        var data = Array<ProductOptionModel>();

        if ( json === undefined || json === null ) {
            return data;
        }

        json.forEach((item:any) => {
            data.push(this.extractProductOptionNode(item));
        });

        return data;
    }

    private extractProductOptionNode(json: any) : ProductOptionModel {
        
        var data = new ProductOptionModel();

        if ( json.name ) {
            data.name = json.name;
        }

        const form = json.form;
        if ( form ) {
            data.name = form.name;
            data.formCode =  ProductEnums.convertToEnumOptionSelectType(form.formCode);
            
            const sizes = form.sizes;
            if ( sizes ) {
                data.sizes = this.extractProductionOptionSizeNoteList(sizes);
            }            
        };
                
        data.children = this.extractProductOptionNodeList(json.children);        
        data.products = this.extractProductOptionNodeList(json.products);

        if ( data.formCode === EnumOptionSelectType.None ) {
        if ( data.products.length > 0) {
            data.formCode = ProductEnums.convertToEnumOptionSelectType(data.products[0].formCode);
            }
        }                

        return data;
    }

    private extractProductionOptionSizeNoteList(json: any) {
        
        var data = new Array<ProductOptionSizeModel>();

        if ( json === undefined || data === null) {
            return data;
        }

        json.forEach((item: any) => {
            const size = new ProductOptionSizeModel();

            size.name = item.name;
            size.size = item.sizeCode;            

            data.push(size);
        });

        return data;
    }

    private extractProductSizeNodeList(json:any) : Array<ProductSizeModel> {

        var data = new Array<ProductSizeModel>();
        json.forEach((sizeJson: any) => {
            var size = this.extractSizeNode(sizeJson);
            data.push(size);
        });

        return data;
    }

    private extractSizeNode(json: any): ProductSizeModel {
        var size = new ProductSizeModel();
        size.name = json.name;
        size.isDefaultSize = json.default;
        size.nutrition = this.extractNutritionNode(json.nutrition);

        json.recipe.default.forEach((recipeJson: any) => {
            var recipie = this.extractRecipeNode(recipeJson);
            size.recipe.push(recipie);
        });

        return size;
    }

    private extractNutritionNode(json: any): NutritionModel {

        const nutrition = new NutritionModel();

        if (json == null) {
            return nutrition;
        }
        const servingSize = json.servingSize;
        const calories = json.calories;
        const caloriesFromFat = json.caloriesFromFat;

        if (servingSize) {
            nutrition.servingSizeDisplayName = servingSize.displayName;
            nutrition.servingSizeValue = servingSize.displayValue;
        }
        if (calories) {
            nutrition.caloriesDisplayName = calories.displayName;
            nutrition.caloriesValue = calories.displayValue;
        }
        if (caloriesFromFat) {
            nutrition.caloriesFromFatDisplayName = caloriesFromFat.displayName;
            nutrition.caloriesFromFatValue = caloriesFromFat.displayValue;
        }

        nutrition.additional = this.parseAdditionalNutritionListNode(json);    

        return nutrition;
    }

    parseAdditionalNutritionListNode(json: any): Array<NutritionAdditionalModel> {
        const data = new Array<NutritionAdditionalModel>();

        if (json === undefined || 
            json == null || 
            json.additionalFacts === undefined || 
            json.additionalFacts === null) {
            return data;
        }

        json.additionalFacts.forEach((item: any) => {

            const additionalNode = this.extractNutritionAdditionalNode(item);
            if (additionalNode !== null) {
                data.push(additionalNode);

                if (item.saturatedFat !== null) {
                    const saturatedFat = this.extractNutritionAdditionalNode(item.saturatedFat)
                    if (saturatedFat !== null) {
                        additionalNode.additional.push(saturatedFat);
                    }
                }

                if (item.transFat !== null) {
                    const transFat = this.extractNutritionAdditionalNode(item.transFat)
                    if (transFat !== null) {
                        additionalNode.additional.push(transFat);
                    }
                }
            }

        })


        return data;
    }

    private extractNutritionAdditionalNode(json: any): NutritionAdditionalModel | null {
        var data = new NutritionAdditionalModel();

        if (json === undefined ||  json === null) {
            return null;
        }

        data.displayName = json.displayName;

        if (json.value) {
            data.displayValue = json.value;
        }
        if (json.displayValue) {
            data.displayValue = json.displayValue;
        }

        if (json.dailyPercentValue) {
            data.displayDailyValue = json.dailyPercentValue;
        }
        if (json.dailyValue) {
            data.displayDailyValue = json.dailyValue;
        }

        if (json.subfacts !== null) {
            data.additional = this.parseAdditionalNutritionListNode(json.subfacts);
        }

        return data;
    }

    private extractRecipeNode(json: any): RecipeItemModel {
        var recipe = new RecipeItemModel();
        recipe.name = json.skuName;
        recipe.quantity = json.quantity;
        recipe.formCode = ProductEnums.convertToEnumOptionSelectType( json.formCode );
        recipe.productNumber = json.productOption.productNumber;
        recipe.sizeCode = json.sizeCode;
        return recipe;
    }
}