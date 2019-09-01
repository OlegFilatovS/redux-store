import React from 'react';

import './error-indicator.scss';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">BOOM!</span>
            <span>
                Something has gone terribly Wrong
            </span>
        </div>
    );
};

export default ErrorIndicator;