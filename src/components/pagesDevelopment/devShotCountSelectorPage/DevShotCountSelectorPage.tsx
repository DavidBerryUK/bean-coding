import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import React                                    from 'react';
import ShotCountSelector                        from "../../ui/ShotCountSelector/ShotCountSelector";

const DevShotCountSelectorPage: React.FC = () => {
   
    const [shotCount, setShotCount] = useState(2)

    const handleShotCountChanged = (value : number ) => {
        setShotCount(value);
    }
    
    return (
        <DevelopmentMasterPageWrapper 
            title="Shot Count Selector"
            description="Experiment with different ways of selecting shot counts">                                    
            <ShotCountSelector shotCount={shotCount} onValueChanged={(shotCount:number)=> { handleShotCountChanged(shotCount) }}/>            
            </DevelopmentMasterPageWrapper>
    );
}

export default DevShotCountSelectorPage;
