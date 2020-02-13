import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router-dom";
import './App.css';
import _ziledenastere from "./zile.json"
import ZiDeNastere from './zidenastere-card';
// import ArticolZiDeNastere from "./zidenastere-lista"
// import ListaZile from "./ListaZile"
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
      buffer: {   //nu se mai foloseste, se poate elimina
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
    this.actualizeazaLista = this.actualizeazaLista.bind(this);
    this.editeazaZi = this.editeazaZi.bind(this);
  }

  stergeZi(ev) {
    ev.preventDefault();
    const id = parseInt(ev.target.id);
    this.setState({ ziledenastere: this.state.ziledenastere.filter(item => item.id !== id) })
  }

  adaugaZi(zi) {
    let maxID = 0;
    let zile;
    //
    // //>>>> Secvenat de mai jos functioneaza bine si est emai usor de inteles dar am rescris-o 
    // //>>>> pentru a evidentia mecanismul de referinta Javascript
    //
    // if (this.state.ziledenastere === null) {
    //   zile = [];
    //   maxID = 0;
    // } else {
    //   zile = [...this.state.ziledenastere];
    //   maxID = zile.reduce((max, item) => Math.max(max, item.id), 0);
    // }
    // zi.id = maxID + 1;
    // zile.push(zi);
    // // zi.id = maxID + 10;  // verifica ca "zi" se adaga in tabloul rezultant ca si referinta si nu ca si valoare
    //
    //  //>>>>> Aici se incheie secventa. Fcuntioneaza la fel de bine ca si secventa de mai jos
    //

    if (this.state.ziledenastere === null) {
      zile = [zi];
      maxID = 0;
    } else {
      zile = [...this.state.ziledenastere, zi];
      maxID = zile.reduce((max, item) => Math.max(max, item.id), 0);
    }
    zi.id = maxID + 1;  //"zi" is a JS reference, then the value is reflected in the array "zile"

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
    const tmpZile = this.state.ziledenastere.map(item => item.id === bufZi.id ? bufZi : item);
    this.setState({
      ziledenastere: tmpZile,
      buffer: bufZi
    })
  }

  actualizeazaLista(zi) {
    if (zi.id === 0)
      this.adaugaZi(zi);
    else this.actualizeazaZi(zi);
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
            <Lista listazile={zileordonate} handleEdit={this.editeazaZi} handleDelete={this.stergeZi} />
          </Route>
          <Route exact path="/Adauga">
            {/* <Formular key={this.state.buffer.id} buffer={this.state.buffer}
              handleSubmit={this.actualizeazaLista} /> */}
            <Formular handleSubmit={this.actualizeazaLista} />
          </Route>
          <Route path="/Adauga">
            {/* <Formular key={this.state.buffer.id} buffer={this.state.buffer}
              // handleSubmit={this.adaugaZi} />
              handleSubmit={this.actualizeazaLista} /> */}
            <Formular handleSubmit={this.actualizeazaLista} />
          </Route>
          <Route path="/Despre">
            <Despre />
          </Route>
          <Route path="/InFormatCard">
            <ZiDeNastere zidenastere={_ziledenastere[0]} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
