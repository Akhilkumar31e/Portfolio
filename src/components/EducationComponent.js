import React,{Component} from 'react';
import {EDUCATION} from '../shared/education';

function RenderSchools({schools}){
    const education= schools.map( (school) => {
        return(
            <div key={school.id} className="row row-display row-edu">
                <div className="container">
                    <div className="row ">
                        <div className="col-2 ">
                        <img className="img-fluid"  src={school.image} alt={school.name} />
                        </div>
                        <div className="col-10 ">
                            <h3>{school.name}</h3>
                            <h6 className="text-muted">{school.stream}, <span className="badge badge-pill badge-light">{school.grade}</span></h6>
                            {school.batch}
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <React.Fragment>
            {education}
        </React.Fragment>
    );
}

class Education extends Component{
    constructor(props){
        super(props);

        this.state={
            schools: EDUCATION
        }

    }


    render(){
        return(
            <React.Fragment>
                <div className="education" id="education">
                    <div className="container">
                        <div className="row row-display">
                            <div className="col-12 col-sm-3">
                            <h1>Education</h1>
                            </div>
                        </div>
                        <RenderSchools schools={this.state.schools} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Education;