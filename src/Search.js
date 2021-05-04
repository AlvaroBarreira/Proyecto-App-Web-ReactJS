import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props);

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(e){
        //Voy a crear mi query, lo convierto en string y lo paso a minisculas

        const query = e.target.value.toString().toLowerCase();

        //Mando a llamar al prop de mi componente padre 
        this.props.onsearch(e.target.value);
    }

    render(){
        return(
            <input type="text" onChange={this.onChangeEvent} />
        );
    }
}

export default Search;