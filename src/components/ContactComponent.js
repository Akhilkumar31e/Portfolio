import React  from 'react';

function Contact (props) {
    return(
        <React.Fragment>
            <div className="contact">
                <div className="container ">
                    <div className="row row-display ">
                        <div className="col-12 col-sm-4">
                            <h1>Contact Me</h1>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <a  className="btn btn-light btn-large btn-block" href="mailto:akhilkumar31e@gmail.com" role="button">Contact</a>
                        </div>
                    </div>
                    <div className="row row-display">
                        <p>Also I'm active on my social links displayed at <a href="#home">top</a> of this page.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;