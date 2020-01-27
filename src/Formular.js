import React, { Component } from 'react';
// import { useRouteMatch, useParams, useLocation } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class Formular extends Component {
    constructor(props) {
        super(props);
        const location = window.location;
        let params = (new URL(document.location)).searchParams;
        // const an = params.get('anul');
        // const anul = an === "null" ? "" : an;
        function valueOrEmpty(val) {
            return val === null || val === 'null' ? "" : val;
        }

        const id = valueOrEmpty(params.get('id'));

        this.state = {
            id: id === "" ? 0 : parseInt(id),
            // numepersoana: props.buffer.numepersoana,
            // ziua: props.buffer.dataNasterii.ziua,
            // luna: props.buffer.dataNasterii.luna,
            // anul: props.buffer.dataNasterii.anul
            numepersoana: valueOrEmpty(params.get('numepersoana')),
            ziua: valueOrEmpty(params.get('ziua')),
            luna: valueOrEmpty(params.get('luna')),
            anul: valueOrEmpty(params.get('anul'))
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(ev) {
        const name = ev.target.name;
        this.setState({ [name]: ev.target.value })
    }

    handleSubmit(ev) {
        ev.preventDefault();
        const { id, numepersoana, ziua, luna, anul } = this.state;
        const ziuaN = {
            id: id,
            numepersoana: numepersoana,
            dataNasterii: {
                ziua: parseInt(ziua),
                luna: parseInt(luna),
                anul: parseInt(anul)
            }
        }
        this.props.handleSubmit(ziuaN);
        let newPath = window.location.protocol;
        newPath += "//" + window.location.hostname;
        newPath += ":" + window.location.port + "/";
        window.location.assign(newPath);
    }

    render() {
        // const hSubmit = this.props.handleSubmit;
        // const id = this.props.zidenastere.id;
        // const data = this.props.zidenastere.dataNasterii;
        // const { id, dataNasterii } = this.props.zidenastere;
        // const data = this.props.zidenastere.dataNasterii;
        // const data = this.props.match;
        // let { data2 } = useParams();
        // let { data2 } = useLocation();
        const adauga_modifica = this.state.id === 0 ? "adauga" : "modifica";
        const titlu = this.state.id === 0 ? "Adauga o ziua de nastere" : "Modifica ziua de nastere";
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6" className="mt-4">
                        <form onSubmit={this.handleSubmit}>
                            <p className="h4 text-center mb-4 grey-text">{titlu}</p>
                            <div className="grey-text">
                                <MDBInput
                                    name="ziua"
                                    label="ziua nasterii"
                                    hint="ex: 14"
                                    icon="clock"
                                    group
                                    // validate
                                    type="text"
                                    value={this.state.ziua}
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    name="luna"
                                    label="luna nasterii"
                                    hint="ex: 01"
                                    icon="edit"
                                    group
                                    type="text"
                                    // validate
                                    value={this.state.luna}
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    name="anul"
                                    label="anul nasterii"
                                    icon="map"
                                    group
                                    type="text"
                                    value={this.state.anul}
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    name="numepersoana"
                                    label="numele persoanei"
                                    icon="file"
                                    group
                                    type="text"
                                    row="5"
                                    value={this.state.numepersoana}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn type="submit" className="text-capitalize">{adauga_modifica}</MDBBtn>
                                {/* <a class="btn btn-primary" type="submit" href="/">Adauga</a> */}
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Formular;