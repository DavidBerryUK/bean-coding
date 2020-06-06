import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { Typography }                           from '@material-ui/core';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import GraphPaper                               from '../../ui/graphPaper/GraphPaper';
import NewReleasesOutlinedIcon                  from '@material-ui/icons/NewReleasesOutlined';
import React                                    from 'react';

interface IProperties {
    title: string,
    description: string,
    componentName: string,
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
                    <Typography variant="h4" component="h4">Component: {props.title} <ElementNameTag size={EnumLabelSize.large} name={props.componentName}/></Typography>
                    <Typography variant="body1" color="textSecondary" >This page is used to preview components under development in isolation</Typography>                    
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
            <Box ml={2} pb={1}>
                <Typography variant="body1">{props.description}</Typography>
                {props.headerElement}
            </Box>
            <GraphPaper>
                {props.children}
            </GraphPaper>
            {props.footerElement}
        </>
    )
}

export default DevelopmentMasterPageWrapper;