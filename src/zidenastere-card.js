import React, { Component } from 'react';
import styles from "./zidenastere.module.css"
import { MDBButton, MDBCard, MDBCardText, MDBCardTitle } from "mdbreact"
import lunileanului from "./lunileanului.js"

class ZiDeNastere extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { ziua, luna, anul } = this.props.zidenastere.dataNasterii;
        const { numepersoana } = this.props.zidenastere;
        const lunaanului = lunileanului[luna - 1];
        return (
            <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                <div className="text-center">
                    <MDBCardTitle>{`${ziua} ${lunaanului}`}</MDBCardTitle>
                    <MDBCardText>
                        {/* <p><span className={styles.numepersoana}>Marin Preda</span> (15 Ianuarie 1976)</p> */}
                        <p><span className={styles.numepersoana}>{numepersoana}</span> {`(${ziua} ${lunaanului} ${anul})`}</p>
                    </MDBCardText>
                </div>

                <div className={styles.link} >
                    <div className="d-flex justify-content-between">

                        <a href="#!">Precedenta</a>
                        <a href="#!" style={{ marginLeft: "1.25rem" }}>Urmatoarea</a>
                    </div>
                </div>
            </MDBCard>
        );
    }
}

export default ZiDeNastere;