import React from 'react';

function CodingProfile(props) {
    const buttons = props.codingProfiles.map( (profile) => {
        return(
            
            <a key={profile.id} className="btn mr-auto ml-auto " href={profile.link} role="button">{profile.name}</a>
            
          );
    });
    return(
        <React.Fragment>
            <div className="codingprofile">
                <div className="container" id="codingProfiles">
                    <div className="row  justify-content-center">
                        <h1>Coding Profiles</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="d-flex flex-wrap bd-highlight mb-5 justify-content-center codingprofile">
                                {buttons}  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CodingProfile;