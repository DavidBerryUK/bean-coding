import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import React                                    from 'react';
import { Button }                               from "@material-ui/core";

interface IProperties {
    onImageSelected: (name: string, fullPath: string) => void;
}

const SampleImageList: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();
    const imageList = ['bricks', 'daywood', 'eveningwood', 'grasses', 'house', 'night', 'sea', 'seedheads', 'seeds']

    const handleImageSelectedButtonClicked = (name: string) => {
        props.onImageSelected(name, `/images/samples/${name}-full.jpg`)
    }

    // display a list of categories
    //
    return (
        <div className={classStyles.root}>
            {imageList.map((name) => (
                <Button
                    key={name}
                    variant="contained"
                    className={classStyles.button}
                    onClick={() => { handleImageSelectedButtonClicked(name) }}>
                    <img src={`/images/samples/${name}-tn.jpg`} alt={name} />
                </Button>
            ))}
        </div>
    )
}

export default SampleImageList
