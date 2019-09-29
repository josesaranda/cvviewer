import React, { Component } from 'react';
import './Content.css';

import axios from 'axios';

type CV = {
    id : number;
    fileName : string;
    createdAt : number;
    updatedAt : number;
};

type ContentProps = {};

type ContentState = {
    cv? : CV;
};

class Content extends Component<ContentProps, ContentState> {

    constructor(props : ContentProps){
        super(props);

        this.state = {};
    }

    componentDidMount(){
        this.getCVInfo();
    }

    private getCVInfo = async () => {
        let { data } = await axios.get(`http://localhost:8123/api/cv/1`);
        this.setState({cv : data});
    }

    render(){
        return (
            <div className="Content">
                {this.state.cv && <embed src={this.state.cv.fileName} width="100%" height="100%" />}
            </div>
        );
    }
}

export { Content };