import { EnumCupSize }                          from "./EnumCupSize";
import CupSizeModel                             from "./CupSizeModel";

export default class CupSizeService {

    static cupSizeModelfactory( cupSize : EnumCupSize) : CupSizeModel {
        return new CupSizeModel(
            cupSize, 
            CupSizeService.enumCupSizeToName(cupSize), 
            CupSizeService.enumCupSizeToDefaultVolume(cupSize), 
            CupSizeService.enumCupSizeToIconScale(cupSize));
    }

    static cupSizeModelFactoryByName(size: string) : CupSizeModel {
        const enumValue = this.stringToEnumCupSize(size);
        return this.cupSizeModelfactory(enumValue);
    }

    static stringToEnumCupSize(cupSize: string): EnumCupSize {

        switch (cupSize.toLowerCase()) {
            case "demo":
                return EnumCupSize.Demo;
            case "doppio":
                return EnumCupSize.Doppio;
            case "grande":
                return EnumCupSize.Grande;
            case "quad":
                return EnumCupSize.Quad;
            case "short":
                return EnumCupSize.Short;
            case "solo":
                return EnumCupSize.Solo;
            case "tall":
                return EnumCupSize.Tall;
            case "triple":
                return EnumCupSize.Triple;
            case "venti":
                return EnumCupSize.Venti
        }
        return EnumCupSize.Unknown;
    }

    static enumCupSizeToName(cupSize: EnumCupSize): string {

        switch (cupSize) {
            case EnumCupSize.Demo:
                return "Demo";
            case EnumCupSize.Doppio:
                return "Doppio";
            case EnumCupSize.Grande:
                return "Grande";
            case EnumCupSize.Quad:
                return "Quad";
            case EnumCupSize.Short:
                return "Short";
            case EnumCupSize.Solo:
                return "Solo";
            case EnumCupSize.Tall:
                return "Tall";
            case EnumCupSize.Triple:
                return "Triple";
            case EnumCupSize.Venti:
                return "Venti";
        }
        return "unknown";
    }

    static enumCupSizeToDefaultVolume(cupSize: EnumCupSize): string {

        switch (cupSize) {
            case EnumCupSize.Demo:
                return "89ml";
            case EnumCupSize.Doppio:
                return "48ml";
            case EnumCupSize.Grande:
                return "473ml";
            case EnumCupSize.Quad:
                return "120ml";
            case EnumCupSize.Short:
                return "267ml";
            case EnumCupSize.Solo:
                return "24ml";
            case EnumCupSize.Tall:
                return "354ml";
            case EnumCupSize.Triple:
                return "90ml";
            case EnumCupSize.Venti:
                return "591ml";
        }
        return "unknown";
    }

    static enumCupSizeToIconScale(cupSize: EnumCupSize): number {

        switch (cupSize) {
            case EnumCupSize.Demo:
                return 15;
            case EnumCupSize.Doppio:
                return 8;
            case EnumCupSize.Grande:
                return 80;
            case EnumCupSize.Quad:
                return 20;
            case EnumCupSize.Short:
                return 40;
            case EnumCupSize.Solo:
                return 5;
            case EnumCupSize.Tall:
                return 60;
            case EnumCupSize.Triple:
                return 15;
            case EnumCupSize.Venti:
                return 100;
        }
        return 0.50;
    }

   

}