import React from 'react';
import { Jumbotron ,Media} from 'reactstrap';

function Header(props)  {
    return(
            <Jumbotron>
                <Media tag="li">
                    <Media left>
                        <Media object src="/assets/images/display_pic.JPG" alt="Profile Image" />
                    </Media>
                    <Media body className="ml-3">
                        <Media heading>Akhil Kumar Ellendula</Media>
                        <p>Computer Science Student</p>
                    </Media>

                </Media>
            </Jumbotron>
    );
}

export default Header;