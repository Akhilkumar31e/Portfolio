import React from 'react';

function About(props){
    return(
        <React.Fragment>
            <div className="about" id="about">
            <div className="container">
                <div className="row row-display">
                    <div className="col-12 col-sm-3">
                        <h1>About Me</h1>
                    </div>
                </div>
                <div className="row  row-display">
                    <div className="col">
                        <p>{props.aboutMe}</p>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default About;