import React, { Component } from 'react';
import ArticolZiDeNastere from "./zidenastere-lista"

class ListaZile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { listazile } = this.props;
        return (
            <div className="d-flex justify-content-center">
                <div>
                    {listazile.map(item => <ArticolZiDeNastere key={item.id} zidenastere={item}
                        handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} />)}
                </div>
            </div >
        );
    }
}

export default ListaZile;