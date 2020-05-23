import * as categoryJson                        from './categoryList.json';
import CategoryModel                            from './models/CategoryModel';

const repositoryDelayMs = 250;

export default class CategoryRepository {

    // get all cateories with artifical delay 
    //
    async getAll(): Promise<Array<CategoryModel>> {

        var promise = new Promise<Array<CategoryModel>>((resolve, reject) => {
            
            // load data into strongly typed objects
            var mappedData: Array<CategoryModel> = categoryJson.categories.map((item) => {
                return new CategoryModel(item.categoryId, item.name);
            });
            
            // sort
            mappedData.sort((a, b) => (a.name > b.name) ? 1 : -1)
            
            // return data after simulated API delay
            setTimeout(() => {
                resolve(mappedData)
            }, repositoryDelayMs);
        });

        return promise;
    }
}