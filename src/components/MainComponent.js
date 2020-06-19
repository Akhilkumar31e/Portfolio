import React, {Component} from 'react';
import  Header  from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Education from './EducationComponent';
import Skills from './SkillsComponent';
import Experience from './ExperienceComponent';
import Projects from './ProjectsComponent';
import CodingProfile from './CodingProfileComponent';
import Contact from './ContactComponent';
import {PROFILES} from '../shared/codingprofiles';
import {TinyButton as ScrollUpButton} from 'react-scroll-up-button';
import {ABOUTME} from '../shared/aboutme';
class MainComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            aboutMe: ABOUTME,
            codingProfiles: PROFILES
        }
    }
    render(){
        return(
            <React.Fragment>
                <Header myName="Akhil Kumar Ellendula"/>
                <About  aboutMe={this.state.aboutMe}/>
                <Education />
                <ScrollUpButton />
                <Skills />
                <Experience />
                <Projects />
                <CodingProfile codingProfiles={this.state.codingProfiles}/>
                <Contact />
                <Footer />
                
            </React.Fragment>
        );
    }
}

export default MainComponent;