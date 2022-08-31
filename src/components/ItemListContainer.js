import "../css/card-menu.css";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
                    <div className="card card-menu">
                        <img src={props.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.carta}</h5>
                                <p className="card-text">{props.descripción}</p>
                                <ItemCount />
                                <a href="#" className="btn btn-primary botón-precio">{props.precio}</a>
                            </div>
                    </div>
    )
}

export default ItemListContainer;