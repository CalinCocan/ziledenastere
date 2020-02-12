import React, { Component } from 'react';
import { MDBJumbotron } from 'mdbreact';

class Despre extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <MDBJumbotron className="text-center">
                <h4>Aplicatie demonstrativa realizata pentru sustinerea examenului la disciplina </h4>
                <h4> <strong>Programarea Interfetelor Utillizator</strong></h4>
                <h5>  </h5>
                <h5> ---    autor: <strong>Cocan Gheorghe-Calin </strong>    --- </h5>
                <p> Demonstreaza utilizarea urmatoarelor elemente:</p>
                <div className="d-flex justify-content-center pl-5">
                    {/* <div className="col-6 "> */}
                    <div className="text-left">
                        <ul className="list-group">
                            <li> <strong>REACT</strong> framework
                                <ul>
                                    <li> Link (MDBLink) </li>
                                    <li> BrowserRouter </li>
                                    <li> Route </li>
                                </ul>
                            </li>
                            <li> <strong>Bootstrap</strong> si <strong>Material Design for Bootstrap</strong> </li>
                            <li> utilizarea resursei DOM <strong><em>window.localStorage </em></strong></li>
                        </ul>
                    </div>
                    {/* </div> */}
                </div>
            </MDBJumbotron >
        );
    }
}

export default Despre;