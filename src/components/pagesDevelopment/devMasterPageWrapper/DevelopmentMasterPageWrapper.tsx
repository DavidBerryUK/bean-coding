import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Typography }                           from '@material-ui/core';
import GraphPaper                               from '../../ui/graphPaper/GraphPaper';
import NewReleasesOutlinedIcon                  from '@material-ui/icons/NewReleasesOutlined';
import React                                    from 'react';

interface IProperties {
    title: string,
    description: string,
    isExperimental?: boolean,
    headerElement?: React.ReactElement,
    footerElement?: React.ReactElement,
}


const DevelopmentMasterPageWrapper: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    return (
        <>
            <Box display='flex' mt={2} ml={2}>
                <Box flex={1}>
                    <Typography variant="h5">{props.title}</Typography>
                </Box>
                {
                    props.isExperimental === true ?

                        <Box className={classStyles.experimentBox}>
                            <Typography variant="body1" component='span'>Experimental Component</Typography>
                            <NewReleasesOutlinedIcon fontSize="large" className={classStyles.experimentIcon} />
                        </Box>

                        : null
                }
            
            </Box>
            <Box ml={2}>
                <Typography variant="body1">{props.description}</Typography>
            </Box>            
            {props.headerElement}
            <GraphPaper>
                {props.children}
            </GraphPaper>
            {props.footerElement}
        </>
    )
}

export default DevelopmentMasterPageWrapper;