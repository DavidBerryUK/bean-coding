import { Box }                                  from '@material-ui/core';
import { FormControlLabel }                     from '@material-ui/core';
import { FormGroup }                            from '@material-ui/core';
import { Grid }                                 from '@material-ui/core';
import { Paper }                                from '@material-ui/core';
import { Switch }                               from '@material-ui/core';
import { useState }                             from 'react';
import ApplicationBackground                    from '../../widgets/applicationBackground/ApplicationBackground';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import React                                    from 'react';
import SampleImageList                          from '../../widgets/sampleImageList/SampleImageList';

const DevApplicationBackgroundPage: React.FC = () => {

    const [imagePath, setImagePath] = useState<string>();
    const [isBurred, setIsBurred] = useState<boolean>(false);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isSaturated, setIsSaturated] = useState<boolean>(false);

    const handleImageSelected = (name: string, fullPath: string) => {
        setImagePath(fullPath)
    }

    const handleIsBlurredChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBurred(event.target.checked);
    }

    const handleIsMutedChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsMuted(event.target.checked);
    }

    const handleIsSaturatedChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSaturated(event.target.checked);
    }

    return (
        <DevelopmentMasterPageWrapper
            title="Application Background"
            description="Develop different styles of presenting an image as the application background"
            headerElement = {
                <>
                <SampleImageList onImageSelected={handleImageSelected} />
                <Box display='flex' justifyContent='center' pl={2} pt={4}>

                <Grid container>
                    <Grid item xs={4}>
                        <Grid container component={Paper} spacing={2}>
                            <Grid item>
                                <FormGroup row>
                                    <FormControlLabel control={<Switch checked={isBurred} onChange={handleIsBlurredChanged}  />}label="is Blurred"/>
                                </FormGroup>
                                <FormGroup row>
                                    <FormControlLabel control={<Switch checked={isMuted} onChange={handleIsMutedChanged}  />}label="is Muted"/>
                                </FormGroup>
                                <FormGroup row>
                                    <FormControlLabel control={<Switch checked={isSaturated} onChange={handleIsSaturatedChanged}  />}label="is Saturated"/>
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            </>
            }>
            
            
            

            <ApplicationBackground 
            imageUrl={imagePath}
            isBlured={isBurred}
            isMuted={isMuted}
            isSaturated={isSaturated}
            />

            <h4>This control has no UI</h4>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevApplicationBackgroundPage;
