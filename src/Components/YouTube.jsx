import React from 'react';

const YouTube = ({link}) => {
    return (
        <iframe
            style={{
                marginTop: "1em",
                border: '0',
                boxShadow: '-moz-initial',
                WebkitBoxShadow: '5px 6px 50px grey'
            }}
            width= "100%"
            height="500px"
            src = {link}
            allowFullScreen={true}
        >
        </iframe>
    );
};

export default YouTube;