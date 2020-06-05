import MenuCategoryModel                        from "./models/MenuCategoryModel";
import NewProductRepository                     from '../productRepository/NewProductRepository'

/**
 *  Fake Repository - ideally all this would be on server / database,
 *  but this makes it easy to experiment
 */
export default class MenuCategoryRepository {

    private productRepository = new NewProductRepository();

    getAll(): MenuCategoryModel {
        const rootCategory = new MenuCategoryModel("root", "Menu");
        rootCategory.categories.push(this.getBakeryCategory())
        rootCategory.categories.push(this.getDrinksCategory())
        rootCategory.categories.push(this.getLunchCategory())
        return rootCategory;
    }

    getBakeryCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("bakery", "Bakery");
        category.categories.push(this.getBagelsCategory());
        category.categories.push(this.getCakesAndPiesCategory());
        category.categories.push(this.getCookiesAndBrowniesCategory());
        category.categories.push(this.getCroissantsCategory());
        category.categories.push(this.getMuffinsAndBreadsCategory());
        category.categories.push(this.getSconesCategory());
        return category;
    }

    getBagelsCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel('bagles', 'Bagels');
        category.products = this.productRepository.getBagels();
        return category;
    }

    getCakesAndPiesCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel('cakes', 'Cakes and Pies');
        category.products = this.productRepository.getCakesAndPies();
        return category;
    }

    getCookiesAndBrowniesCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("cookies", "Cookies and Brownies");
        category.products = this.productRepository.getrCookiesAndBrownies();
        return category;
    }

    getCroissantsCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("croissants", "Croissants");
        category.products = this.productRepository.getCroissants();
        return category;
    }

    getMuffinsAndBreadsCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("muffins", "Muffins and Breads");
        category.products = this.productRepository.getMuffinsAndBreads();
        return category;
    }

    getSconesCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("scones", "Scones");
        category.products = this.productRepository.getScones();
        return category;
    }

    getDrinksCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("drinks", "Drinks");
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
        const category = new MenuCategoryModel("americano", "Americano");
        category.products = this.productRepository.getAmericano();
        return category;
    }

    getBrewedTeaCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("brewed tea", "Brewed Tea");
        category.products = this.productRepository.getBrewedTea();
        return category;
    }

    getCappuccinoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("cappuccino", "Cappuccino");
        category.products = this.productRepository.getCappuccino();
        return category;
    }

    getEspressoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("espresso", "Espresso");
        category.products = this.productRepository.getEspresso();
        return category;
    }

    getLatteCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("Latte", "Latte");
        category.products = this.productRepository.getLatte();
        return category;
    }

    getFrappuccinoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("frappuccino", "Frappuccino");
        category.categories.push(this.getCoffeeFrappuccinoCategory());
        category.categories.push(this.getCreamFrappuccinoCategory());
        return category;
    }

    getCoffeeFrappuccinoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("coffee frappuccino", "Coffee Frappuccino");
        category.products = this.productRepository.getCoffeeFrappuccino();
        return category;
    }

    getCreamFrappuccinoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("cream frappuccino", "Cream Frappuccino");
        category.products = this.productRepository.getCreamFrappuccino();
        return category;
    }

    getMacchiatoCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("macchato", "Macchiato");
        category.products = this.productRepository.getMacchiato();
        return category;
    }

    getMochaCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("mocha", "Mocha");
        category.products = this.productRepository.getMocha();
        return category;
    }

    getLunchCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("lunch", "Lunch");
        category.categories.push(this.getSaladCategory());
        category.categories.push(this.getSandwhichesCategory());
        category.categories.push(this.getWrapsCategory());
        return category;
    }

    getSaladCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("salads", "Salads");
        category.products = this.productRepository.getSalads();
        return category;
    }

    getSandwhichesCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("sandwhiches", "Sandwhiches");
        category.products = this.productRepository.getSandwhiches();
        return category;
    }

    getWrapsCategory(): MenuCategoryModel {
        const category = new MenuCategoryModel("wraps", "Wraps");
        category.products = this.productRepository.getWraps();
        return category;
    }
}