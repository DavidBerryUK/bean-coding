import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import FrostedGlassPanel                        from '../../ui/frostedGlassPanel/FrostedGlassPanel';
import React                                    from 'react';
import SampleImageList                          from '../../widgets/sampleImageList/SampleImageList';

const DevFrostedGlassPage: React.FC = () => {

    const [imagePath, setImagePath] = useState<string>();
    const classStyles = ClassStyleDefinition();

    const handleImageSelected = (name: string, fullPath: string) => {
        setImagePath(fullPath)
    }

    const imageStyle = (): {} => {
        const style = {
            backgroundImage: `url(${imagePath})`,
            height: '100%',
            backgroundPosition: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

        };
        return style;
    }

    return (
        <DevelopmentMasterPageWrapper 
            title="Frosted Glass"
            description="Experiment with frosted glass overlay, not supported in Firefox"
            componentName="FrostedGlassPanel"
            isExperimental
            headerElement= {<SampleImageList onImageSelected={handleImageSelected} />}
            >                        
            <Box display='flex' justifyContent='center' pt={4}>
                <Paper className={classStyles.regionImage}>
                    <div style={imageStyle()}>
                        <FrostedGlassPanel className={classStyles.sampleRegion1} />
                        <FrostedGlassPanel className={classStyles.sampleRegion2} />
                        <FrostedGlassPanel className={classStyles.sampleRegion3} />
                    </div>
                </Paper>
            </Box>
            </DevelopmentMasterPageWrapper>
    );
}

export default DevFrostedGlassPage;
