import { Button }                               from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { useState }                             from 'react';
import React                                    from 'react';

interface IProperties {
    elements: Array<React.ReactElement>
}

const ItemListSelector: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const [selectedItem, setSelectedItem] = useState<React.ReactElement>();

    const handleItemSelected = (element: React.ReactElement) => {
        setSelectedItem(element);
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
        if (props.elements[index] === selectedItem) {
            className = `${className} ${classStyles.selected}`;
        }
        return className;
    }


    return (
        <Paper elevation={1} className={classStyles.paper}>
            {
                props.elements.map((element, index) => (
                    <Button
                        variant="contained"
                        className={getClassNames(index)}
                        onClick={() => { handleItemSelected(element) }}>
                        {element}
                    </Button>
                ))
            }
        </Paper>
    )
}

export default ItemListSelector
