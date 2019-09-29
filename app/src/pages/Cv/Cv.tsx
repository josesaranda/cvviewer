import React, { Component } from 'react';
import './Cv.css';

import { Aside } from './Aside'
import { Content } from './Content'

type CvProps = {};

type CvState = {};

class Cv extends Component<CvProps, CvState> {

    render(){
        return (
            <div className="Cv">
                <Aside></Aside>
                <Content></Content>
            </div>
        );
    }
}

export { Cv };