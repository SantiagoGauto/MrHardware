import promise from "./promise";
import item from "./Item";
import { useEffect } from "react";
import { useState } from "react";

const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        promise(item)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        {
            products.map(item => (
                <>
                <h2>{item.name}</h2>
                <img> src={item.imagen}</img>
                <p>{item.info}</p>
                </>
            ))
        }
        </>
    )
}

export default ItemList;