import { useContext }                           from 'react';
import { useState }                             from 'react';
import CommandAddToAudit                        from "../../context/developerContext/actions/CommandAddToAudit";
import DeveloperContext                         from "../../context/developerContext/DeveloperContext";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import React                                    from 'react';
import ShotCountSelector                        from "../../ui/ShotCountSelector/ShotCountSelector";

const DevShotCountSelectorPage: React.FC = () => {
   
    const dispatch = useContext(DeveloperContext).dispatch;

    const [shotCount, setShotCount] = useState(2)

    const handleShotCountChanged = (value : number ) => {
        setShotCount(value);
        dispatch(new CommandAddToAudit(`Selected ${value} shots`));
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
