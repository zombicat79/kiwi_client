import React from 'react';

import zombiecatLogo from './../img/zombiecat-trans-logo.png';

function ViewportAlert() {
    return (
        <div id="alert-screen">
            <p className="alert-text">This site is not available for mobile devices.</p>
            <p className="alert-text">Please use a desktop computer to access its content.</p>
            <a href="https://zombiecat.dev/" rel="noreferrer" target="_blank" class="branding-pack branding-pack--alert">
                <h1 class="branding-heading">Zombiecat</h1>
                <img className="branding-img" src={zombiecatLogo} alt="Cartoon-like logo depicting a cat" />
            </a>
        </div>
    )
}

export default ViewportAlert;