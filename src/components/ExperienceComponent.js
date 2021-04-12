import React,{ Component } from 'react';
import {EXPERIENCE} from '../shared/experience';

function RenderJobs({experience}){
    const jobs= experience.map( (job)=> {
        return(
            <div key={job.id} className="row row-display row-edu">
                <div className="col-12 col-sm-6 ">
                    <h3>{job.jobname}</h3>
                    <div className="row">
                        <div className="col-6">
                        <h5>{job.company}</h5>
                        </div>
                        <div className="col-6">
                        <h5 className="text-muted">{job.time}</h5>
                        </div>
                    </div>
                    
                </div>
                <div className="col-12 job-style">
                    {job.desc && <p>{job.desc}</p>}
                </div>
            </div>
        );
    }).reverse();
    return(
        <React.Fragment>
            {jobs}
        </React.Fragment>
    )
}

class Experience extends Component{
    constructor(props){
        super(props);

        this.state={
            experience: EXPERIENCE
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="experince" id="experince">
                    <div className="container">
                        <div className="row row-display">
                            <div className="col-12 col-sm-4">
                                <h1>Experience</h1>
                            </div>
                        </div>
                        <RenderJobs experience={this.state.experience} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Experience;