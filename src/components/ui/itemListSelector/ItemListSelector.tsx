import { Button }                               from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import React                                    from 'react';

interface IProperties {
    elements: Array<React.ReactElement>,
    selectedIndex: number | undefined,
    onItemSelected: (index: number) => void
}

const ItemListSelector: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();    

    const handleItemSelected = (index: number) => {        
        if ( props.onItemSelected ) {
            props.onItemSelected(index);
        }
    }

    const getClassNames = (index: number): string => {
        let className = `${classStyles.button} `;
        if (index === 0) {
            className = `${className} ${classStyles.first}`;
        } else if (index === (props.elements.length - 1)) {
            className = `${className} ${classStyles.last}`;
        } else {
            className = `${className} ${classStyles.middle}`;
        }
        if (index === props.selectedIndex) {
            className = `${className} ${classStyles.selected}`;
        }
        return className;
    }


    return (
        <Paper elevation={1} className={classStyles.paper}>
            {
                props.elements.map((element, index) => (
                    <Button key={index}
                        variant="contained"
                        className={getClassNames(index)}
                        onClick={() => { handleItemSelected(index) }}>
                        {element}
                    </Button>
                ))
            }
        </Paper>
    )
}

export default ItemListSelector
