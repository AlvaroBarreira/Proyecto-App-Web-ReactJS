import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      comics:[
            {id:0, rating:4, title: 'The Walking Dead #01', image: 'image01.jpg'},
            {id:1, rating:3, title: 'The Walking Dead *Michonne Especial*', image:'image02.jpg'},
            {id:2, rating:4, title: 'The Walking Dead *Here´s Negan*', image:'image03.jpg'},
            {id:3, rating:5, title: 'Marvel The Infinity Gauntlet', image:'image04.jpg'},
            {id:4, rating:4, title: 'Marvel X-men', image:'image06.jpg'},
            {id:5, rating:5, title: 'Zed League of Legends', image:'image07.jpg'},
            {id:6, rating:4, title: 'Lux League of Legends', image:'image08.jpg'},
            {id:7, rating:3, title: 'Pestilence #01', image:'image09.jpg'},
          ],
          /*Para hacer la busqueda de comics vamos a hacer una copia de mi arreglo inicial*/
      copyComics: []
    };

    this.onSearch = this.onSearch.bind(this);
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

    //Esta es la funcion que me va a servir para llenar la copia de mis comics
  initComics(){

    /*Este state es diferente al que estamos utilizando abajo, porque generalmente setState es una operacion asincrona, quiere decir que no te garantiza que despues de ejecutarla puedas seguir utilizando el state conforme a la operacion que ese encuentra dentro de este estado*/
    this.setState((state,props) => ({

      /*Entonces aca decimos que cada vez que se ejecute initComics, setState se va a actualizar a que copyComics va a ser una copia de el arreglo de comics original */
      copyComics: [...state.comics]
    }));
  }

  componentDidMount(){
    this.initComics();
  }
  /*Para esta funcion necesitamos un query*/
  onSearch(query){

    //Lo primero que hacemos es validar que el query este vacio, si este vacio lo unico que va a hacer es regresarmelos al estado inicial, como si no hubiesemos hecho ningun cambio 
    if(query === ''){
      this.setState({copyComics: [...this.state.comics]});

      //Si el query contiene texto, voy a crear un arreglo temporal de mis comics
    }else{

      const temp = [...this.state.comics];
      var res = [];  

      /*Despues voy a meter un forEach porque quiero recorrer cada elemento*/
      temp.forEach(item =>{

        //Pregunto si el titulo del elemento que lo transformo a minisculas es mayor de -1 cuando aplico un indexOf(que me va a buscar la coincidencia), entonecs ese resultado lo voy a añadir a mi arreglo de res que cree arriba, como esta en un forEach lo va a hacer para todos los elementos 
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      
      //Cuando termine de ejecutarse el forEach voy a actualizar el estado de copyComics que es el que voy a manipular, para que tenga el resultado de res, es decir el arreglo que va a tener los resultados filtrados de acuerdo al query que le estamos colocando y lo copiamos para que sea igual que copyComics
      this.setState({copyComics: [...res]});
    }
  }

  addItem(item){

    /*Aca voy a recibir toda la informacion*/

    /*Cuando corramos este metodo, creamos un arreglo temporal, copiamos el arreglo*/
    var temp = [...this.state.comics];
    //Necesito sacar el ultimo id que tiene mi arreglo, "temp.length-1" para que me de el indice del ultimo elemento y de ese voy a sacar el id, ya teniendo el id voy a sumarle 1, en este caso el actual seria 4 y el siguiente que voy a agregar sera 5
    const id = temp[temp.length-1].id + 1;

    /*A item le voy a crear la propiedad de id y le voy a asignar el id que acabo de crear*/
    item['id'] = id;

    //por ultimo en temp voy a hacer un push para insertar todo el elemento
    temp.push(item);

    //Al final lo regresamos al state, le hago una copia al temp para que se actualizen mis comics
    this.setState({comics: [...temp]});
    this.initComics();
  }

  remove(id){
    var temp = [...this.state.comics];
    const res = temp.filter(item => item.id != id);
    this.setState({comics: [...res]});
    this.initComics();
  }

  updateRating(item){
    var temp = [...this.state.comics];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({comics: [...temp]});
    this.initComics();
  }

  render(){
    return (
      <div className="app">
        <Menu title="ComicDB" onsearch={this.onSearch} onadd={this.addItem} />
        <List className="list" items={this.state.copyComics} onremove={this.remove} onupdaterating={this.updateRating} />
      </div>
    );
  }
}

export default App;


