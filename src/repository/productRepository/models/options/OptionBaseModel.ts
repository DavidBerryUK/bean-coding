export enum enumOptionType {
    AddIn = 100,
    Blended,
    ButterAndSpreads,
    DiaryAlternatives,
    Flavours,
    Sandwich,
    Shots,
    Tea,
    Toppings,
    Warming,
}

export default class OptionBaseModel {
    name: string;
    optionType: enumOptionType;

    constructor(name: string, optionType: enumOptionType) {
        this.name = name;
        this.optionType = optionType;
    }
}