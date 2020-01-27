import React, { Component } from 'react';
import lunileanului from "./lunileanului.js"
import styles from "./zidenastere.module.css"
// import styles from "./zidenastere.module.css"
import { MDBBtn, MDBLink } from "mdbreact"

class ArticolZiDeNastere extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const zi = this.props.zidenastere
        const { ziua, luna, anul } = zi.dataNasterii;
        const an = anul == null ? "" : `(${anul})`;
        const { numepersoana } = zi;
        const lunaanului = lunileanului[luna - 1];
        const { handleDelete, handleEdit } = this.props;

        return (
            <div className="mt-3 pt-2">
                <div className="float-left mr-5">
                    <h6> {`${ziua} ${lunaanului}`} <span className={styles.anul}>{an}</span> </h6>
                    <h5> {numepersoana} </h5>
                </div>
                <div className="float-right ml-5">
                    <div className="d-flex align-content-end flex-wrap">
                        <MDBLink className="btn btn-primary btn-rounded btn-sm pl-3 text-capitalize" to="/Adauga">
                            <i className="fas fa-edit mr-2"></i>
                            Modifica
                        </MDBLink>
                        {/* <MDBBtn
                            id={zi.id}
                            rounded
                            color="indigo" className="btn-sm btn-rounded"
                            onClick={handleEdit}>
                            <i className="fas fa-edit mr-2"></i>
                            Modifica
                        </MDBBtn> */}
                        <MDBBtn
                            id={zi.id}
                            // color="indigo" 
                            className="btn btn-light btn-rounded btn-sm text-capitalize"
                            onClick={handleDelete}>
                            <i className="fas fa-trash-alt mr-2"></i>
                            Sterge
                        </MDBBtn>
                    </div>
                </div>
                <div className="clearfix"></div>
                <hr />
            </div>
        );
    }
}

export default ArticolZiDeNastere;