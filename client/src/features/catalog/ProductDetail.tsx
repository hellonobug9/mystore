import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Product} from "src/models/product.ts";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Divider, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import Paper from "@mui/material/Paper";

export default function ProductDetail() {
    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:5198/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);
    if(loading) return <h3>Loading ...</h3>;
    if(!product) return <h3>Product not found</h3>;
    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
               <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}}/>
            </Grid>
            <Grid item xs={6}>
               <Typography variant='h3'>{product.name}</Typography>
                <Divider sx={{mb: 2}}/>
                <Typography variant='h4' sx={{mb: 2}} color='secondary'>${(product.price/100).toFixed()}</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{fontWeight: 'bold'}}>Name</TableCell>
                                <TableCell align="right"> {product.name}</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{fontWeight: 'bold'}}>Description</TableCell>
                                <TableCell align="right"> {product.description}</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{fontWeight: 'bold'}}>Type</TableCell>
                                <TableCell align="right"> {product.type}</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{fontWeight: 'bold'}}>Brand</TableCell>
                                <TableCell align="right"> {product.brand}</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{fontWeight: 'bold'}}>Quantity in stock</TableCell>
                                <TableCell align="right"> {product.quantityInStock}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    )
}