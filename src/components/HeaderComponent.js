import React, {Component} from 'react';
import { Jumbotron, Navbar,NavItem,NavbarToggler,Collapse,Nav} from 'reactstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel} from 'react-responsive-carousel';
import  { TAGLINES }  from '../shared/taglines';
import { FadeTransform} from 'react-animation-components';


function RenderName({name}){
    return(
    <h4 className="display-4" id="myName"><b>{name}</b></h4>
    );
}
function RenderCarouselItem({tagline}){
    return(
        <div>
            <p className="text-muted">{tagline}</p>
        </div>
    );
}
class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false,
            taglines: TAGLINES
        }
        this.toggleNav=this.toggleNav.bind(this);
    }
    
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render(){
        const renderItems= this.state.taglines.map((tagline) => {
            return(
                <div key={tagline}>
                <RenderCarouselItem tagline={tagline} />
                </div>
            );
        })
       
        return(
            <React.Fragment>
               
                <Jumbotron>
                <Navbar dark >
                    
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav navbar>
                                <NavItem onClick={this.toggleNav}>
                                    <a className="btn" href="#home" role="button">
                                        Home
                                        </a>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                <a className="btn" href="#about" role="button">
                                        About
                                        </a>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                <a className="btn" href="#education" role="button">
                                        Education
                                        </a>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                <a className="btn" href="#skills" role="button">
                                        Skills
                                        </a>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                <a className="btn" href="#projects" role="button">
                                        Projects
                                        </a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    
                </Navbar>
                    <div className="container" id="home">
                        <FadeTransform in>
                        <div className="row row-header"> 
                            <div className="col-12 col-sm-3">
                                <img className="img-fluid img-thumbnail img-rounded"  src="/Portfolio/assets/images/display_pic.jpg" alt="Profile pic" />
                            </div>
                            <div className="col-12 col-sm-9">
                                <RenderName name={this.props.myName}/>
                                <Carousel infiniteLoop autoPlay showThumbs={false} >
                                    {renderItems}
                                </Carousel>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 align-self-center">
                                <a className="btn btn-social-icon" href="http://instagram.com/akhil_31e"><i className="fa fa-instagram fa-lg"></i></a>
                                <a className="btn btn-social-icon" href="https://www.linkedin.com/in/akhil-kumar-ellendula-5510b2163/"><i className="fa fa-linkedin fa-lg"></i></a>
                                <a className="btn btn-social-icon" href="https://twitter.com/akhil_31e"><i className="fa fa-twitter fa-lg"></i></a>
                                <a className="btn btn-social-icon" href="https://github.com/Akhilkumar31e"><i className="fa fa-github fa-lg"></i></a>
                            </div>
                        </div>
                        </FadeTransform>
                    </div>
                    
                </Jumbotron>  
            </React.Fragment>
        );
    }
}
export default Header;