import React, { Component } from 'react';
import ListaZile from "./ListaZile"
import ListaVida from "./ListaVida"

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { listazile, handleEdit, handleDelete } = this.props;
        if (listazile == null)
            return <ListaVida />;
        return <ListaZile listazile={listazile} handleEdit={handleEdit} handleDelete={handleDelete} />;
    }
}

export default Lista;