//Carrito de compras botón Navbar.
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

const CartWidget = () => {
    const { totalProducts } = useCartContext();
    const { TotalEnvióPrice } = useCartContext();
    const { totalPrice } = useCartContext();

    return (
        <>
        <Link to='/cart'>
        <button type="button" className="btn btn_build">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
            {/* Total de los productos por cantidad que se muestran a la derecha del carrito. */}
            <div>
                <span className="cantidad-numero">{totalProducts() || ""}</span>
                <span className="cantidad-precio"> ${totalPrice() > 0 && TotalEnvióPrice()}</span>
            </div>
        </button>
        </Link>
        </>
    );
};

export default CartWidget;