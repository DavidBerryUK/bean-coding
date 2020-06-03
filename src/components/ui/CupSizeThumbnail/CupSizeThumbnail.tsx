import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Typography }                           from '@material-ui/core';
import LocalCafeOutlinedIcon                    from '@material-ui/icons/LocalCafeOutlined';
import React                                    from 'react';

export interface IProperties {
    sizeName: string,
    volumeDescription: string,
    scalePercentage: number
}

const CupSizeThumbnail: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();  

    const cupSizeClass = () : {} => {
        return { 
            fontSize: 10 + 80 * props.scalePercentage / 100
         }
    }

    return (
        <div className={classStyles.root}>
            <div className={classStyles.iconContainer}>            
                    <LocalCafeOutlinedIcon style={cupSizeClass()} />            
            </div>
            <Typography variant="subtitle1" color="textPrimary" className={classStyles.title}> {props.sizeName}</Typography>
            <Typography variant="subtitle2" color="textSecondary"  className={classStyles.volume}>{props.volumeDescription}</Typography>
        </div>
    )
}

export default CupSizeThumbnail
