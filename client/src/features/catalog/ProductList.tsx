import {Product} from "src/models/product.ts";
import ProductCard from "src/features/catalog/ProductCard.tsx";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
interface  Props {
    products: Product[];
}
export default function ProductList({products}: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map((product, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                       <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}