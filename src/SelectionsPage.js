
// Login.js:
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Achieve from './pa.png'
import DataVis from './dataVis.png'
import webapp from './webapp.png'
import './SelectionPage.css';

function SelectionsPage() {


  const handleSubmit = (event) => {
    window.location.assign("/results")
  };

  return (
    <Container>
<div class="about-section">
  <h1>My Portfolio</h1>
  <p>Working as a Team lead at guidehouse.</p>
  <p>
  <span  style={{background:'white', color: 'black'}} class="badge badge-secondary">React</span>
  <span  style={{background:'white', color: 'black', marginLeft: '10px'}} class="badge badge-secondary">Angular 10+</span>
  <span  style={{background:'white', color: 'black' , marginLeft: '10px'}} class="badge badge-secondary">CSS</span>
  <span  style={{background:'white', color: 'black' , marginLeft: '10px'}} class="badge badge-secondary">Bootstrap</span>
  <span  style={{background:'white', color: 'black' , marginLeft: '10px' }} class="badge badge-secondary">JavaScript</span>
  <span  style={{background:'white', color: 'black' , marginLeft: '10px' }} class="badge badge-secondary">D3</span>
  <span  style={{background:'white', color: 'black' , marginLeft: '10px' }} class="badge badge-secondary">Chart.JS</span>
  <span  style={{background:'white', color: 'black' , marginLeft: '10px' }} class="badge badge-secondary">Java</span>
  <span  style={{background:'white', color: 'black' , marginLeft: '10px' }} class="badge badge-secondary">NodeJS</span>
  <span  style={{background:'white', color: 'black' , marginLeft: '10px' }} class="badge badge-secondary">HTML</span>

  </p>
</div>

<br />
<br />
<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <img src={Achieve} style={{width: '250px'}} />
        <h5 class="card-title">Achievements</h5>
        <p class="card-text">I worked on publishing a Thesis and a research paper</p>
        <p class="card-text">I was an active member of CERG research group at George Mason</p>
        <a href="https://www.mobt3ath.com/uplode/book/book-29844.pdf?ver=accessable" target='_blank' class="btn btn-primary">Thesis</a>
        <a style={{marginLeft:'10px'}}  href="https://www.enggjournals.com/ijet/docs/IJET13-05-03-094.pdf" class="btn btn-primary">Paper</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <img src={DataVis} style={{width: '200px'}} />
        <h5 class="card-title">Data Visualization Projects</h5>
        <p class="card-text">I have built some sample Barchar, Line Chart using D3.js </p>
        <p class="card-text">Plans to improve these making dynamic with user's data input</p>
        <a  href="/chart" class="btn btn-primary">Bar Chart</a>
        <a style={{marginLeft:'10px'}} href="/lchart" class="btn btn-primary">Line Chart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <img src={webapp} style={{width: '150px'}} />
        <h5 class="card-title">Web Applications </h5>
        <p class="card-text">1. A web application to help farmers in our home town in India.(Built in  the language that farmers can understand) </p>
        <p class="card-text"> 2. An Angular application to generate a new Joke every day. </p>
        <a  href="https://ricemilllekka.tiiny.site/" class="btn btn-primary">Farmers Help</a>
        <a style={{marginLeft:'10px'}} href="/joke" class="btn btn-primary">Tell A Joke</a>
      </div>
    </div>
  </div>
</div>
  </Container>
  );
}

export default SelectionsPage;