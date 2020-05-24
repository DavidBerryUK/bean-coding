import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { useState }                             from 'react';
import FrostedGlass                             from '../../ui/frostedGlass/FrostedGlass';
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
        <>
            <Typography variant="h5">Frosted Glass Images</Typography>
            <SampleImageList onImageSelected={handleImageSelected} />

            <Box display='flex' justifyContent='center' pt={4}>
                <Paper className={classStyles.regionImage}>
                    <div style={imageStyle()}>
                        <FrostedGlass className={classStyles.sampleRegion1} />
                        <FrostedGlass className={classStyles.sampleRegion2} />
                        <FrostedGlass className={classStyles.sampleRegion3} />
                    </div>
                </Paper>
            </Box>
        </>
    );
}

export default DevFrostedGlassPage;
