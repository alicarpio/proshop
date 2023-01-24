import React from 'react'
import {Link} from "react-router-dom";
import {Row,Col, Image, ListGroup,Card,Button} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products"
import {useParams} from "react-router-dom";

const ProductScreen = () => {
    let params = useParams(); //v6
    const product = products.find((p) => p._id === params.id)

    return (
        <>
            <h1>{product.name}</h1>
        </>
    )
}

export default ProductScreen