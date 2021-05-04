import React, { Fragment } from 'react';
import './Menu.css';
import Search from './Search';
import PanelAdd from './PanelAdd';

class Menu extends React.Component{

    constructor(props){
        super(props);

        /*Como necesito que se muestre un panel voy a tener que manejar mi state, voy a crear en mi state una variable que se llame newItemPanel*/

        this.state = {newItemPanel: false};
        //Va a tener un valor booleano, porque necesito que cuando este oculto este en false, y que cuando le haga click con el evento cambie su valor a true

        /*Necesitamos bindear nuestro add con la clase, esto se hace para cada metodo que utilice o este basado en eventos*/
        this.add = this.add.bind(this);

        /*Esto va a evitar que se actualize mi pagina cuando le demos cancelar al boton del panel*/
        this.onCancel = this.onCancel.bind(this);
    }
    /*Esta es la funcion que me va a servir para mostrar el panel que va a añadir un nuevo elemento o un nuevo comic. */
    add(){
     this.setState({newItemPanel: true});   
    }

    /*Para el caso contrario, esta funcion me va a permitir ocultar el panel*/
    onCancel(){

        /*Le agrego un preventDefault para que no me ejecute cualquier evento que viene por defecto*/
        this.setState({newItemPanel: false});   
    }


    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">{this.props.title}</div>
                    <div className="search">
                        <Search onsearch={this.props.onsearch} />
                    </div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">Agregar nuevo Comic</button>
                    </div>
                </div>
                {(this.state.newItemPanel)?
                 <PanelAdd onhide={this.onCancel} onadd={this.props.onadd} />
                 : 
                 ''
                 }
            </div>
        );
    }
}

export default Menu;