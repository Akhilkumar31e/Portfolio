import React, {Component} from 'react';
import {SKILLS} from '../shared/skills';

function RenderSkillSet({skillset}){
    var i=0;
    const set= skillset.map( (skill) => {
        if(i==0){
            i++;
            return(
                <span>{skill}</span>
            );
           
        }
        else{
            return(
                <span>, {skill}</span>
            );
        }
    });
    return(
        <React.Fragment>
            {set}
        </React.Fragment>
    );
}

function RenderSkills({skills}){
    const displaySkills= skills.map( (skill) => {
        return(
            <div key={skill.id} className="row row-display row-edu">
                <div className="co1-12 col-sm-4">
                    <h2 className="text-muted">{skill.type}</h2>
                </div>
                <div className="col-12 col-sm-6">
                    <RenderSkillSet skillset= {skill.skillset} />
                </div>
            </div>
        );
    });

    return(
        <React.Fragment>
            {displaySkills}
        </React.Fragment>
    );
}

class Skills extends Component{
    constructor(props){
        super(props);

        this.state={
            skills: SKILLS
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="skills" id="skills">
                    <div className="container">
                        <div className="row row-display">
                            <div className="col-12 col-sm-3">
                                <h1>Skills</h1>
                            </div>
                        </div>
                        <RenderSkills skills={this.state.skills} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Skills;