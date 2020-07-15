import { EnumProductSize }                      from "./EnumProductEnums";
import { EnumProductType }                      from "./EnumProductEnums";
import ProductSizeModel                         from "./ProductSizeModel";

export default class ProductSizeService {

    static productSizeModelfactory(productSize: EnumProductSize): ProductSizeModel {
        return new ProductSizeModel(
            productSize,
            ProductSizeService.productSizeToProductType(productSize),
            ProductSizeService.enumProductSizeToName(productSize),
            ProductSizeService.enumProductSizeToDefaultVolume(productSize),
            ProductSizeService.enumProductSizeToIconScale(productSize));
    }

    static productSizeModelFactoryByName(size: string): ProductSizeModel {
        const enumValue = this.stringToEnumProductSize(size);
        return this.productSizeModelfactory(enumValue);
    }

    static stringToEnumProductSize(productSize: string): EnumProductSize {

        switch (productSize.toLowerCase()) {
            case "demo":
                return EnumProductSize.Demo;
            case "doppio":
                return EnumProductSize.Doppio;
            case "grande":
                return EnumProductSize.Grande;
            case "quad":
                return EnumProductSize.Quad;
            case "short":
                return EnumProductSize.Short;
            case "solo":
                return EnumProductSize.Solo;
            case "tall":
                return EnumProductSize.Tall;
            case "triple":
                return EnumProductSize.Triple;
            case "venti":
                return EnumProductSize.Venti;
            case "1 piece":
                return EnumProductSize.OnePiece;
        }

        console.log(`Unknown product size name:${productSize}`);

        return EnumProductSize.Unknown;
    }

    static productSizeToProductType(productSize: EnumProductSize): EnumProductType {
        switch (productSize) {
            case EnumProductSize.OnePiece:
                return EnumProductType.item;
        }
        return EnumProductType.cup;
    }

    static enumProductSizeToName(productSize: EnumProductSize): string {

        switch (productSize) {
            case EnumProductSize.Demo:
                return "Demo";
            case EnumProductSize.Doppio:
                return "Doppio";
            case EnumProductSize.Grande:
                return "Grande";
            case EnumProductSize.Quad:
                return "Quad";
            case EnumProductSize.Short:
                return "Short";
            case EnumProductSize.Solo:
                return "Solo";
            case EnumProductSize.Tall:
                return "Tall";
            case EnumProductSize.Triple:
                return "Triple";
            case EnumProductSize.Venti:
                return "Venti";
            case EnumProductSize.OnePiece:
                return "1 Piece";
        }

        return "unknown";
    }

    static enumProductSizeToDefaultVolume(productSize: EnumProductSize): string {

        switch (productSize) {
            case EnumProductSize.Demo:
                return "89ml";
            case EnumProductSize.Doppio:
                return "48ml";
            case EnumProductSize.Grande:
                return "473ml";
            case EnumProductSize.Quad:
                return "120ml";
            case EnumProductSize.Short:
                return "267ml";
            case EnumProductSize.Solo:
                return "24ml";
            case EnumProductSize.Tall:
                return "354ml";
            case EnumProductSize.Triple:
                return "90ml";
            case EnumProductSize.Venti:
                return "591ml";
        }
        return "unknown";
    }

    static enumProductSizeToIconScale(productSize: EnumProductSize): number {

        switch (productSize) {
            case EnumProductSize.Demo:
                return 15;
            case EnumProductSize.Doppio:
                return 8;
            case EnumProductSize.Grande:
                return 80;
            case EnumProductSize.Quad:
                return 20;
            case EnumProductSize.Short:
                return 40;
            case EnumProductSize.Solo:
                return 5;
            case EnumProductSize.Tall:
                return 60;
            case EnumProductSize.Triple:
                return 15;
            case EnumProductSize.Venti:
                return 100;
        }
        return 0.50;
    }
}