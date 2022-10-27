import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            terms and condition
            <p>Go back to <Link to='/register'>Registration</Link> </p>
        </div>
    );
};

export default TermsAndConditions;