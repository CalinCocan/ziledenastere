import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class Formular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // numepersoana: props.buffer.numepersoana,
            // ziua: props.buffer.dataNasterii.ziua,
            // luna: props.buffer.dataNasterii.luna,
            // anul: props.buffer.dataNasterii.anul
            id: 0,
            numepersoana: props.buffer.numepersoana,
            ziua: props.buffer.dataNasterii.ziua,
            luna: props.buffer.dataNasterii.luna,
            anul: props.buffer.dataNasterii.anul
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
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6" className="mt-4">
                        <form onSubmit={this.handleSubmit}>
                            <p className="h4 text-center mb-4 grey-text">Introduceti activitatea</p>
                            <div className="grey-text">
                                <MDBInput
                                    name="ziua"
                                    label="ziua nasterii"
                                    hint="ex: 14"
                                    icon="clock"
                                    group
                                    // validate
                                    type="text"
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
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    name="anul"
                                    label="anul nasterii"
                                    icon="map"
                                    group
                                    type="text"
                                    onChange={this.handleChange}
                                />
                                <MDBInput
                                    name="numepersoana"
                                    label="numele persoanei"
                                    icon="file"
                                    group
                                    type="text"
                                    row="5"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn type="submit">Adauga</MDBBtn>
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