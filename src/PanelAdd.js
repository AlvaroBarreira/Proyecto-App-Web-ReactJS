import React from 'react';

class PanelAdd extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            title: '',
            image: '',
            rating: 1
        };

        this.cancelAction = this.cancelAction.bind(this);
        this.createItem = this.createItem.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    cancelAction(e){
        this.props.onhide();
    }

    onChangeTitle(e){

        /*De esta forma modificamos el titulo por el valor que vamos a ingresar*/
        this.setState({title: e.target.value});
        
    }
    onChangeImage(e){
        this.setState({image: e.target.value});
    }
    onChangeRating(e){

        /*Creo una variable para transformar el valor y asegurarme de que sea un entero*/
        const rating = parseInt(e.target.value);
        this.setState({rating: rating});
    }

    createItem(e){
        e.preventDefault();

        /*Hago referencia a cada uno de los elementos, guardando cada valor en una variable*/
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        /*Primero mando a llamar al props, que se llame onadd, a ese metodo le voy a mandar como parametro ese arreglo como si fuera un objeto*/
        this.props.onadd({title: title, image: image, rating: rating});
        this.cancelAction();
    }

    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.createItem}>
                        <p>
                        <label>Nombre del Comic</label><br />
                        <input type="text" name="title" className="input" onChange={this.onChangeTitle} />
                        </p>

                        <p>
                        <label>Nombre de imagen</label><br />
                        <input type="text" name="image" className="input" onChange={this.onChangeImage} />
                        </p>

                        <p>
                        <label>Calificación</label><br />
                        <select onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar Comic" />
                        <button className="button btn-normal" onClick={this.props.onhide}>Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;