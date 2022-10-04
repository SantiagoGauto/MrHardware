import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
// uso de SweetAlert para las alertas de los productos en stock.
import swal from 'sweetalert';
import React from "react";
import {doc, collection, setDoc, serverTimestamp, updateDoc, increment} from 'firebase/firestore';
import {db} from '../utils/firebaseConfig';

const Cart = () => {
    const cartContext = useContext(CartContext);

    //orden de compra.
    const createOrder = () => {
        let itemsForDB = cartContext.cartList.map(item => ({
            id: item.id,
            title: item.nombre,
            price: item.precio,
            qty: item.quantity
        }))
        let order = {
            buyer: {
                name: 'Santiago Gauto',
                email: 'santiago.delgauto@gmail.com',
                phone: '123456789'
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: cartContext.TotalEnvióPrice()
        }
            //crear la orden de compra en la base de datos.
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrderInFirestore()
        .then(result => {
            swal('¡su orden de compra fue creada con éxito! = ' + result.id)
            //a la hora de hacer la compra final, se actualice el stock:
        cartContext.cartList.forEach(async(item) => {
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.quantity)
            });
        })
        //a la hora de hacer la compra final, se borra el carrito:
        cartContext.clear()
        })
        .catch(err => console.log(err))
    }


    //función cuando el carrito esta vació.
    if (cartContext.cartList.length === 0) {
        return (
        <div className="carrito-vacío">
        <p className="alerta-vació">¡AÚN NO HAY ITEMS EN EL CARRITO!</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
        </svg>
        <p className="alerta-vació-productos">Continue eligiendo productos desde aquí:</p>
        <Link to='/'> 
        <button className="btn hacer-compra diseño-compra">Seguir Navegando
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="compra-carrito bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
        </button> 
        </Link>
        </div>
        )
    }


    //lo que se muestra cuando hay productos dentro del carrito.
    return (
        <>
        <div className="main-carrito">
            <div className="mas-menos">
                {/* Botón de seguir comprando */}
                {cartContext.cartList.length > 0 &&
                    <Link to='/'>  <button className="mas-productos btn third"> Agregar más productos ➟ </button> </Link>}
                
                {/* Remover todo // ('> 0 &&' para que desaparezca cuando esta vació el carrito) */}
                {cartContext.cartList.length > 0 &&
                    <button className="menos-productos btn third-clear" onClick={cartContext.clear}>Borrar todo los productos ⭮</button>}
            </div>
            {cartContext.cartList.map((product) => ( 
                <div key={product.id}>
                    <div className="card mb-3 card-producto">
                        <div className="row g-0">
                            <div className="col-md-4">
                                {/* Imagen del producto */}
                                <img className="img-fluid rounded-start img-producto" src={product.imageSrc} alt={product.imageAlt}></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    {/* Nombre del producto */}
                                    <h3 className="h3-productos">{product.nombre}</h3>
                                    <div className="detalles-producto">
                                        {/* precio del producto */}
                                        <p>PrecioUNIT:	 ${product.precio}</p>
                                        {/* cantidad del producto */}
                                        <p>Cantidad: {product.quantity}</p>
                                        {/* subtotal del producto */}
                                        <p>Subtotal: ${product.quantity * product.precio}</p>
                                        <p>Más envió ($1200): ${cartContext.TotalEnvióPrice()}</p>
                                    </div>
                                    {/* botón para borrar una lista del producto comprado */}
                                    <button className="borrar-producto" onClick={() => cartContext.removeItem(product.id)}>Borrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        <hr />
        {/* La suma total de TODOS los productos */}
        <p className="Total-productos">Total: ${cartContext.TotalEnvióPrice()}</p>
        <button className="btn buy Total-compra" onClick={createOrder}>Hacer compra</button>
        </div>
        </>
    )
}

export default Cart;