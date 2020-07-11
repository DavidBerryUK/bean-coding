import { Button }                               from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { useState }                             from 'react';
import React                                    from 'react';

interface IProperties {
    elements: Array<React.ReactElement>
    onItemSelected?: (item: React.ReactElement) => void
}

const ItemListSelector: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const [selectedIndex, setSelectedIndex] = useState<number>();

    const handleItemSelected = (index: number, element: React.ReactElement) => {
        setSelectedIndex(index);
        if ( props.onItemSelected ) {
            props.onItemSelected(element);
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
        if (index === selectedIndex) {
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
                        onClick={() => { handleItemSelected(index,element) }}>
                        {element}
                    </Button>
                ))
            }
        </Paper>
    )
}

export default ItemListSelector
