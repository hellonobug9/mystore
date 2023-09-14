import {Product} from "src/models/product.ts";
import ProductList from "src/features/catalog/ProductList.tsx";
import {useEffect, useState} from "react";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        fetch(
            "http://localhost:5198/products")
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
                console.log(json);
            })
    }, [])

    const addProduct = () => {
        console.log('add')
    }
    return (
        <div>
            <ProductList products={products}/>
        </div>
    )
}