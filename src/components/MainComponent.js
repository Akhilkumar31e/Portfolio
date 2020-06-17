import React, {Component} from 'react';
import  Header  from './HeaderComponent';
import Footer from './FooterComponent';

class MainComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Footer />
            </React.Fragment>
        );
    }
}

export default MainComponent;