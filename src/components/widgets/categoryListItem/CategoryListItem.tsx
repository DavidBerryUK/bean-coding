import { Card }                                 from '@material-ui/core';
import { CardActionArea }                       from '@material-ui/core';
import { CardContent }                          from '@material-ui/core';
import { CardMedia }                            from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Typography }                           from '@material-ui/core';
import CategoryModel                            from '../../../repository/categoryRepository/models/CategoryModel';
import React                                    from 'react';

interface IProperties {
    category: CategoryModel
    onCategorySelected: (image: CategoryModel) => void;
}

const CategoryListItem: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const handleCategoryClicked = () => {
        props.onCategorySelected(props.category);
    }

    return (
        <Card className={classStyles.root} onClick={handleCategoryClicked}>
            <CardActionArea>
                <CardMedia
                    className={classStyles.media}
                    image={`/images/categories/${props.category.imageThumbnail}`}
                    title={props.category.name}
                />
                <CardContent className={classStyles.cardContent}>
                    <Typography gutterBottom variant="subtitle1" >
                        {props.category.name}
                    </Typography>                    
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CategoryListItem
