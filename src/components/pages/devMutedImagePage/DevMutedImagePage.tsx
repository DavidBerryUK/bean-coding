import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { useState }                             from 'react';
import React                                    from 'react';
import SampleImageList                          from '../../widgets/sampleImageList/SampleImageList';


const DevMutedImagePage: React.FC = () => {

    const [imageName, setImageName] = useState<string>();
    const [imagePath, setImagePath] = useState<string>();

    const classStyles = ClassStyleDefinition();

    const handleImageSelected = (name: string, fullPath: string) => {
        setImageName(name);
        setImagePath(fullPath)
    }

    return (
        <>
            <Typography variant="h5">Muted Images</Typography>
            <SampleImageList onImageSelected={handleImageSelected} />

            <Box display='flex' justifyContent='center' pt={4}>
                <Paper className={classStyles.regionImage}>
                    {imageName === null
                        ? null
                        : <img src={imagePath} alt={imageName} />
                    }
                    
                </Paper>
            </Box>
        </>
    );
}

export default DevMutedImagePage;
