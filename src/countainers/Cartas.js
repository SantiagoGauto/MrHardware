import ItemListContainer from '../components/ItemListContainer';

const Cartas = (props) => {
    return (
    <>
        {
        props.items.map(item => (
            <ItemListContainer
            key={item.id}
            img={item.img}
            carta={item.carta}
            descripción={item.descripción}
            precio={item.precio}
            />
        ))
        }
    </>
    );
}

export default Cartas;