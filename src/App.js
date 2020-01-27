import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import _ziledenastere from "./zile.json"
// import ZiDeNastere from './zidenastere-card';
// import ArticolZiDeNastere from "./zidenastere-lista"
import ListaZile from "./ListaZile"
import Lista from "./Lista"
import Formular from "./Formular"
import Despre from "./Despre"
import NavbarPage from "./Meniu.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ziledenastere: _ziledenastere,
      ziledenastere: JSON.parse(window.localStorage.getItem("ZileDeNastere")),
      buffer: {
        id: 0,
        numepersoana: "",
        dataNasterii: {
          ziua: "",
          luna: "",
          anul: ""
        }
      },
      flagEdit: false //if true, the formular will showup
    }

    this.stergeZi = this.stergeZi.bind(this);
    this.adaugaZi = this.adaugaZi.bind(this);
    this.actualizeazaZi = this.actualizeazaZi.bind(this);
    this.editeazaZi = this.editeazaZi.bind(this);
  }

  stergeZi(ev) {
    ev.preventDefault();
    const id = parseInt(ev.target.id);
    this.setState({ ziledenastere: this.state.ziledenastere.filter(item => item.id !== id) })
  }

  // actualizeazaZi(ev) {
  //   ev.preventDefault();
  //   const {name, value} = ev.target;
  //   const tmp=Object.assign({},this.state.buffer);
  //   tmp.numepersoana=ev.target
  //   this.setState({buffer[name]:value})
  // }

  adaugaZi(zi) {
    let maxID = 0;
    let zile = this.state.ziledenastere;
    if (this.state.ziledenastere != null) {
      maxID = this.state.ziledenastere.reduce((max, item) => Math.max(max, item.id), 0);
      zile.push(zi);
    } else {
      zile = [zi];
    }

    zi.id = maxID + 1;
    this.setState({
      // ziledenastere: [...zile, zi],
      ziledenastere: zile,
      buffer: {
        id: "",
        dataNasterii: {
          ziua: "",
          luna: "",
          anul: ""
        }
      }
    });
    // let newPath = window.location.protocol;
    // newPath += "//" + window.location.hostname;
    // newPath += ":" + window.location.port + "/";
    // window.location.assign(newPath);
    // // window.location.assign("http://localhost:3000/");
  }

  actualizeazaZi(bufZi) {
    // ev.preventDefault();
    // const { name, value } = ev.target;
    // tmp.numepersoana = ev.target
    // const tmp = Object.assign({}, this.state.buffer);
    const tmpZile = this.state.ziledenastere.map(item => item.id === bufZi.id ? item : bufZi);
    this.setState({
      ziledenastere: tmpZile,
      buffer: bufZi
    })
  }

  editeazaZi(ev) {

  }

  componentDidMount() {
    document.title = "Zile de nastere";
  }

  componentDidUpdate() {
    window.localStorage.setItem("ZileDeNastere", JSON.stringify(this.state.ziledenastere));
  }

  render() {
    const zile = this.state.ziledenastere;
    // const zileordonate = ziledenastere.sort((a, b) => { return (a.dataNasterii.luna * 31 + a.dataNasterii.ziua) - (b.dataNasterii.luna * 31 + b.dataNasterii.ziua); });
    const zileordonate = zile === null ? zile :
      zile.sort((a, b) => { return (a.dataNasterii.luna * 31 + a.dataNasterii.ziua) - (b.dataNasterii.luna * 31 + b.dataNasterii.ziua); });
    return (
      <div>
        <NavbarPage />
        {/* <ListaZile listazile={this.state.ziledenastere} handleEdit={this.editeazaZi} handleDelete={this.stergeZi} /> */}
        <Switch>
          <Route exact path="/">
            {/* <ListaZile listazile={zileordonate} handleEdit={this.editeazaZi} handleDelete={this.stergeZi} /> */}
            <Lista listazile={zileordonate} handleEdit={this.editeazaZi} handleDelete={this.stergeZi} />
          </Route>
          <Route path="/Adauga">
            <Formular key={this.state.buffer.id} buffer={this.state.buffer}
              handleSubmit={this.adaugaZi} />
          </Route>
          <Route path="/Despre">
            <Despre />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
