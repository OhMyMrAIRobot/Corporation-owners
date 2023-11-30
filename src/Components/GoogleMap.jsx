import React from 'react';

const GoogleMap = ({link}) => {
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
            src = "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=gomel+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allow = "autoplay"
        >
        </iframe>
    );
};

export default GoogleMap;



