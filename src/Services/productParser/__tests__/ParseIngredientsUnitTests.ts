import ingredientJson                           from './data/classicCoffeeCakeIngredients.json';
import ParseIngredients                         from '../ParseIngredients';


it('parse ingredients', () => {

    // convert json to strongly typed object
    //
    const ingredients = ParseIngredients.parseArray(ingredientJson.Ingredients)

    expect(ingredients).not.toBeNull();    
    expect(ingredients.length).toBe(13);

    expect(ingredients[0].name).toBe('Enriched Wheat Flour');
    const sub1 = ingredients[0].SubIngredients;
    expect(sub1.length).toBe(6);
    expect(sub1[0].name).toBe("Wheat Flour");
    expect(sub1[1].name).toBe("Niacin");
    expect(sub1[2].name).toBe("Reduced Iron");
    expect(sub1[3].name).toBe("Thiamine Mononitrate");
    expect(sub1[4].name).toBe("Riboflavin");
    expect(sub1[5].name).toBe("Folic Acid");

    expect(ingredients[1].name).toBe('Sugar');
    expect(ingredients[2].name).toBe('Light Brown Sugar');
    expect(ingredients[3].name).toBe('Unsalted Butter');
    expect(ingredients[4].name).toBe('Sour Cream');
    expect(ingredients[5].name).toBe('Whole Eggs');
    expect(ingredients[6].name).toBe('Whole Milk');
    expect(ingredients[7].name).toBe('Soybean Oil');
    expect(ingredients[8].name).toBe('Cinnamon');
    expect(ingredients[9].name).toBe('Baking Powder');
    expect(ingredients[10].name).toBe('Natural Flavor');
    expect(ingredients[11].name).toBe('Pan Spray');
    expect(ingredients[12].name).toBe('Sea Salt');

});
