import { EnumCupSize }                          from "./EnumCupSize";

export default class CupSizeModel {
    name: string;
    cupSize: EnumCupSize;
    iconScale: number;
    volume: string;

    constructor(cupSize: EnumCupSize, name: string, volume: string, iconScale: number) {
        this.cupSize = cupSize;
        this.name = name;        
        this.volume = volume;
        this.iconScale = iconScale;
    }
}