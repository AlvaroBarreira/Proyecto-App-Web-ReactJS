import React from 'react';
import './Item.css';

/*Debo cambiar mi function item a una clase, porque necesito utilizar el state para poder mostrar la informacion, para hacer el recorrido de mi rating, y mostrar el numero de estrellas que tiene, necesito un estado que me diga cuantos elementos son */

/*function Item(props){*/
class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1,

            /*Voy a decirle que me cree un arreglo que tenga el numero de elementos que tiene las estrellas y que lo rellene con un 1 o un 0*/
            stars: []
        }

        this.onremove = this.onremove.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }
    /*Dentro de esta funcion voy a modificar el estado*/
    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image, 
            rating: parseInt(this.props.rating),
            stars: Array(parseInt(this.props.rating)).fill(1)/*parseInt para transformar el rating, si mi rating tiene 4 estrellas, voy a crear un arreglo de 4 espacios llenados con el valor 0*/
        });
    }

    onremove(e){
        console.log(this.props.id);
        this.props.onremove(this.props.id);
    }

    //Aca lo que hago es que cada vez que cambie el rating se actualize mi estado 
    onChangeRating(e){
        const rating = parseInt(e.target.value)
        this.setState({
            //Le extraigo el valor a mi variable de rating
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });

        this.props.onupdaterating({id: this.state.id, title: this.state.title, image: this.state.image, rating: rating});
    }

    render(){
        return(
            <div className="item">
                <div className="image"><img src={'img/' + this.state.image} width="100%"  /></div>
                <div className="title">{this.state.title}</div>
                <div className="rating">
                    <p>
                    {/*Aca lo unico que hago es mapear cada uno de esos espacios para que por cada espacio cree una estrella */this.state.stars.map(x =>
                        <img src='img/star.png' width='32' />
                    )}
                    </p>
                    Calificación: 
                    <select value={this.state.rating} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button className="active" onClick={this.onremove}>Eliminar</button>
                </div>
            </div>
        );
    }

}

export default Item;