import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../../widgets/devMasterPageWrapper/DevelopmentMasterPageWrapper';
import React                                    from 'react';
import ShotCountSelector                        from "../../ui/ShotCountSelector/ShotCountSelector";

const DevShotCountSelectorPage: React.FC = () => {
   
    const classStyles = ClassStyleDefinition();    
    const [shotCount, setShotCount] = useState(2)


    const handleShotCountChanged = (value : number ) => {
        setShotCount(value);
    }
    
    return (
        <DevelopmentMasterPageWrapper 
            title="Shot Count Selector"
            description="Experiment with different ways of selecting shot counts">            
            
            <Paper className={classStyles.paper}>
                <ShotCountSelector shotCount={shotCount} onValueChanged={(shotCount:number)=> { handleShotCountChanged(shotCount) }}/>
            </Paper>

            </DevelopmentMasterPageWrapper>
    );
}

export default DevShotCountSelectorPage;
