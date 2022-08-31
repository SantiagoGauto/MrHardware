import { React, useState } from 'react'

import "../css/card-menu.css";

const ItemCount = () => {
    const [counter, setCounter] = useState(1);

  //increase counter
    const increase = () => {
    setCounter(count => count + 1);
    };

  //decrease counter
    const decrease = () => {
    setCounter(count => count - 1);
    };

    return (
        <div className="counter">
            <div className="btn__container btn-group btn-group-toggle">
                <button className="control__btn btn btn-primary btn btn-outline-dark" type="button" onClick={increase}> + </button>
                <span className="counter__output btn">{counter}</span>
                <button className="control__btn btn btn-primary btn btn-outline-dark" type="button" onClick={decrease}> - </button>
            </div>
        </div>
    );
}

export default ItemCount;