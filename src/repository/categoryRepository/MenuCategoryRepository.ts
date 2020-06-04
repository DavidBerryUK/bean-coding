import MenuCategoryModel                        from "./models/MenuCategoryModel";
import NewProductRepository                     from '../productRepository/NewProductRepository'

export default class MenuCategoryRepository {

    private productRepository = new NewProductRepository();

    getAll(): MenuCategoryModel {

        const rootCategory = new MenuCategoryModel("root","Menu");

        rootCategory.categories.push(this.getBakeryCategory())
        rootCategory.categories.push(this.getDrinksCategory())
        rootCategory.categories.push(this.getLunchCategory())

        return rootCategory;
    }

    getBakeryCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("bakery","Bakery");
        category.categories.push(this.getBagelsCategory());
        category.categories.push(this.getCakesAndPiesCategory());
        category.categories.push(this.getCookiesAndBrowniesCategory());
        category.categories.push(this.getCroissantsCategory());
        category.categories.push(this.getMuffinsAndBreadsCategory());
        category.categories.push(this.getSconesCategory());
        return category;
    }

    getBagelsCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel('b','Bagels');        
        category.products = this.productRepository.getBagels();
        return category;
    }

    getCakesAndPiesCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel('cp','Cakes and Pies');        
        category.products = this.productRepository.getCakesAndPies();
        return category;
    }

    getCookiesAndBrowniesCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("cb","Cookies and Brownies");
        category.products = this.productRepository.getrCookiesAndBrownies();
        return category;
    }

    getCroissantsCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("cr","Croissants");
        category.products = this.productRepository.getCroissants();
        return category;
    }

    getMuffinsAndBreadsCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("mb","Muffins and Breads");
        category.products = this.productRepository.getMuffinsAndBreads();
        return category;
    }

    getSconesCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("sc","Scones");
        category.products = this.productRepository.getScones();
        return category;
    }

    getDrinksCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("drinks","Drinks");
        category.categories.push(this.getAmericanoCategory());
        category.categories.push(this.getBrewedTeaCategory());
        category.categories.push(this.getCappuccinoCategory());
        category.categories.push(this.getEspressoCategory());
        category.categories.push(this.getFrappuccinoCategory());
        category.categories.push(this.getLatteCategory());
        category.categories.push(this.getMacchiatoCategory());
        category.categories.push(this.getMochaCategory());
        return category;
    }

    getAmericanoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }

    getBrewedTeaCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }

    getCappuccinoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }

    getEspressoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }

    getLatteCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }

    getFrappuccinoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }

    getMacchiatoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }

    getMochaCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }

    getLunchCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        category.categories.push(this.getSaladCategory());
        category.categories.push(this.getSandwhichesCategory());
        category.categories.push(this.getWrapsCategory());
        return category;
    }

    getSaladCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }
    getSandwhichesCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }
    getWrapsCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel();
        return category;
    }

}