import React,{ Component} from 'react';
import { PROJECTS } from '../shared/projects';

function RenderProjects({projects}) {
    const renderProject = projects.map( (project)=> {
        return(
            <div key={project.id} className="row row-display row-edu">
                <div className="col-12">
                    <h2>{project.name}</h2>
                    <p>{project.desc}</p>
                </div>
            </div>            
        );
    });

    return(
        <React.Fragment>
            {renderProject}
        </React.Fragment>
    );
}
class Projects extends Component{
    constructor(props){
        super(props);

        this.state={
            projects:PROJECTS
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="projects" id="projects">
                    <div className="container">
                        <div className="row row-display">
                            <div className="col-12 col-sm-4">
                                <h1>Projects</h1>
                            </div>
                        </div>
                        <RenderProjects projects={this.state.projects} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Projects;