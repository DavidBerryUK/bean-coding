import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import NutritionAdditionalModel                 from "../../../repository/productRepository/models/NutritionAdditionalModel";
import NutritionModel                           from '../../../repository/productRepository/models/NutritionModel';
import React                                    from 'react';

interface IProperties {
    nutrition: NutritionModel
}

const ProductNutrition: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    return (
        <Paper>
            <div className={classStyles.textLabel}>{props.nutrition.servingSizeDisplayName}</div>
            <div className={classStyles.textData}>{props.nutrition.servingSizeValue}</div>

            <div className={classStyles.textLabel}>{props.nutrition.caloriesDisplayName}</div>
            <div className={classStyles.textData}>{props.nutrition.caloriesValue}</div>

            <div className={classStyles.textLabel}>{props.nutrition.caloriesFromFatDisplayName}</div>
            <div className={classStyles.textData}>{props.nutrition.caloriesFromFatValue}</div>


            {
                props.nutrition.additional.map((item: NutritionAdditionalModel) => (
                    <div key={item.displayName}>
                        <div className={classStyles.textLabel}>{item.displayName}</div>
                        <div className={classStyles.textData}>{item.displayValue}</div>
                        {
                            item.additional.map((item: NutritionAdditionalModel) => (
                                <div key={item.displayName}>
                                    <div className={classStyles.textLabel}>        {item.displayName}</div>
                                    <div className={classStyles.textData}>        {item.displayValue}</div>

                                    {
                                        item.additional.length > 0
                                            ? <h2>        **** Additional Items:{item.additional.length} *****</h2>
                                            : null
                                    }
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </Paper>
    )
}

export default ProductNutrition
