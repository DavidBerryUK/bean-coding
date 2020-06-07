export enum EnumOptionSelectType  {
    Modifier = 'modifier',        
    One = 'one',
    Quantity = 'quantity',        
    YesOrNo = 'yes/no',

    None = 'none',
    Unknown = 'unknown',
}

export default class ProductEnums {

    static convertToEnumOptionSelectType(value: string) : EnumOptionSelectType {

        switch( value.toLowerCase() ) {
            case 'unknown':
                return EnumOptionSelectType.Unknown;

            case 'one':
                return EnumOptionSelectType.One;
            
            case 'modifier':
                return EnumOptionSelectType.Modifier;

            case 'qty':
            case 'quantity':
                return EnumOptionSelectType.Quantity;

            case 'yes-no':
            case 'yes/no':
                return EnumOptionSelectType.YesOrNo;
        }
        console.log("************************************************************************");
        console.log(`ProductEnums:EnumOptionSelectType - type not supported = '${value}'`)
        console.log("************************************************************************");
        return EnumOptionSelectType.Unknown;
    }

}