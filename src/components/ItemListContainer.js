import "../css/card-menu.css";

const ItemListContainer = (props) => {
    return (
                    <div className="card card-menu">
                        <img src={props.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.carta}</h5>
                                <p classNameName="card-text">{props.descripción}</p>
                                <a href="#" className="btn btn-primary">{props.precio}</a>
                            </div>
                    </div>
    )
}

export default ItemListContainer;