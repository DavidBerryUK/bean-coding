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
}

const CategoryItem: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    return (
        <Card className={classStyles.root}>
            <CardActionArea>
                <CardMedia
                    className={classStyles.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title={props.category.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" >
                        {props.category.name}
                    </Typography>                    
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CategoryItem
