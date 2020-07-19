import nutritionjson                            from './data/nutrition.json';
import ParseNutrition                           from "../ParseNutrition";

it('extract nutrition json to strong model', () => {

   const nutrition = ParseNutrition.parse(nutritionjson.Nutrition);

   expect(nutrition).not.toBeNull();
   expect(nutrition.serviceSize).toBe("354 ml");
   expect(nutrition.calories).toBe("252 kcal");
   expect(nutrition.caloriesFromFat).toBe("0");

   expect(nutrition.facts).not.toBeNull();
   expect(nutrition.facts.length).toBe(6);

   const f1 = nutrition.facts[0];
   const f2 = nutrition.facts[1];
   const f3 = nutrition.facts[2];
   const f4 = nutrition.facts[3];
   const f5 = nutrition.facts[4];
   const f6 = nutrition.facts[5];

   expect(f1.name).toBe("Fat");
   expect(f1.value).toBe("12.4 g");
   expect(f1.dailyValue).toBe("16 %");
   expect(f1.subFacts.length).toBe(2);

   expect(f1.subFacts[0].name).toBe("of which saturates");
   expect(f1.subFacts[0].value).toBe("7.3 g");
   expect(f1.subFacts[0].dailyPercentage).toBe("36.5 %");

   expect(f1.subFacts[1].name).toBe("Trans Fat");
   expect(f1.subFacts[1].value).toBe("0 g");   

   expect(f2.name).toBe("Cholesterol");
   expect(f2.value).toBe("0 mg");
   expect(f2.dailyValue).toBe("");
   expect(f2.subFacts.length).toBe(0);

   expect(f3.name).toBe("Salt");
   expect(f3.value).toBe("0 g");
   expect(f3.dailyValue).toBe("");
   expect(f3.subFacts.length).toBe(0);

   expect(f4.name).toBe("Carbohydrate");
   expect(f4.value).toBe("31.5 g");
   expect(f4.dailyValue).toBe("11 %");
   expect(f4.subFacts.length).toBe(2);

   expect(f4.subFacts[0].name).toBe("Fibre");
   expect(f4.subFacts[0].value).toBe("0 g");
   expect(f4.subFacts[0].dailyPercentage).toBe("0 %");

   expect(f4.subFacts[1].name).toBe("of which sugars");
   expect(f4.subFacts[1].value).toBe("31.3 g");

   expect(f5.name).toBe("Protein");
   expect(f5.value).toBe("3.3 g");
   expect(f5.dailyValue).toBe("7 %");
   expect(f5.subFacts.length).toBe(0);

   expect(f6.name).toBe("Caffeine");
   expect(f6.value).toBe("0 mg");
   expect(f6.dailyValue).toBe("");
   expect(f6.subFacts.length).toBe(0);

});
