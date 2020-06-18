import React from 'react';

function Footer(props) {
    return(
       <React.Fragment>
           <div className="footer" id="footerDiv">
               <div className="container">
               <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Akhil Kumar</p>
                </div>
            </div>
               </div>
           </div>
       </React.Fragment>
    );
}

export default Footer;