import React, { Component } from 'react';

class Notabilities extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div className="notabilities container" id="notabilities">
                    <div className="row row-display">
                        <div className="col-12 col-sm-4">
                            <h1>Notabilities</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Notabilities;