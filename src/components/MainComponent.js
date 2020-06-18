import React, {Component} from 'react';
import  Header  from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Education from './EducationComponent';
import {ABOUTME} from '../shared/aboutme';
class MainComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            aboutMe: ABOUTME
        }
    }
    render(){
        return(
            <React.Fragment>
                <Header myName="Akhil Kumar Ellendula"/>
                <About  aboutMe={this.state.aboutMe}/>
                <Education />
                <Footer />
            </React.Fragment>
        );
    }
}

export default MainComponent;