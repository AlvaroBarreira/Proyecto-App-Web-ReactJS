/*=============================================
REACT JS: 

COMPONENTES 
JSX 
ESTADO

Dos formas de declarar componentes:

Forma de funcion: 

function Item(props){
	

	return();
}



Forma de extendiendo a travez de una clase tradicional en js:

class Item extends React.components{
	
	constructor(props){
	}

	render(){
		return(); 
	}
}

El render es la funcion que se encarga de representar visualmente el componente


JSX: Es una forma de escribir HTML usando JavaScript 

ejemplo:

return(
	<div className = "List">
		Title: {props.title}
	</div>	
);


return(
	<div className="app">
		<Menu title="Amozon" />
		<List className="List" />
	</div>
);



JSX funciona de una forma mas declarativa y no de logica 


ESTADO: Al ser una libreria o framework reactivo, osea que apartir del cambio en el estado de los datos, la interfaz va a sufrir cambios 

ejemplo:

class Item extends React.Components{
	

	constructor(props){
		
		super(props);
		this.state = {n: 5}; / this.state es una variable solo de lectura, por lo tanto no podemos modificar ni asignar valores que no sean dentro del constructor/

	}


	render(){
		return(
			<div className = "List">

				...
			</div>
		);
	}
}


Para poder modificar esa variable de estado (this.state) donde se guardan todos los datos que vamos a utilizar en nuestra aplicacion, tenemos que hacer uso a una funcion que se llama "this.setState", nos permite modificar el estado, para agregar o eliminar elementos, 

ejemplo:

increase(newValue){
	this.setState({n: newValue});
}


Otras dos funciones tambien importantes para el Estado son

componentDidMount() {
	/Para configurar el estado inicial cuando el componente se agrega al DOM/
}

componentWillUnmount() {
	/Para terminar activadades cuando el componente se elimina del DOM/
}


=============================================*/


