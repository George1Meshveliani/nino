import React from 'react';
// import { render } from 'react-dom';
// import { Router } from "@reach/router";
import Grid from './Grid';
import ReactDOM from 'react-dom';
import './styles.css'
import About from './About';
import SocialFollow from "./SocialFollow";

// import Profile from './Profile';


// import './styles.css';

class Application extends React.Component {
  render() {
    return (
      <div>

        <About  />
        <div className="text-center">
            <h1> Here you can find some of my work </h1>
        </div>
        <section className="grid">
          <div className="container-fluid py-3">
            <Grid />
          </div>
        </section>
        <div className="text-center collumn">

        <SocialFollow />   
        
             </div>

      </div>

  );
}

}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
