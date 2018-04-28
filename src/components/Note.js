import React, { Component } from 'react';
// import logo from './logo.svg';
// import App from '../App.js';
// import './App.css';

class Note extends Component {



    render() {
        return (
            <div className="note" onClick={this.props.deleteMethod}>
                {this.props.text}
            </div>

        );
    }
}

export default Note;
