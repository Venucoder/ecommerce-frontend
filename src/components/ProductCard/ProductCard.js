import {Card, CardContent, CardMedia, CardActionArea, Typography} from "@mui/material";
import './ProductCard.css'

const ProductCard = ({product}) => {
    return (
        <Card className="product-card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body1" color="textSecondary" fontSize="medium">
                        $ {product.price}
                    </Typography>
                    <Typography variant="body2" sx={{mt: 1}}>
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard;