import React from 'react';

const Delimiter = (props) => {
    return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 165.02 13.03"
                style = {{
                    ...props
                }}
            >
              <g id="Objects">
                <g opacity=".42">
                  <g>
                    <line x1="1.02" y1="6.52" x2="164" y2="6.52" fill="none" stroke="#454345" stroke-linecap="round" stroke-linejoin="round"/>
                    <g>
                      <ellipse cx="164" cy="6.52" rx="1.02" ry=".59" fill="#454345"/>
                      <ellipse cx="1.02" cy="6.52" rx="1.02" ry=".59" fill="#454345"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <polyline points="96.53 8.46 82.51 12.53 68.49 8.46" fill="none" stroke="#454345" stroke-linecap="round" stroke-linejoin="round"/>
                      <polyline points="68.49 4.57 82.51 .5 96.53 4.57" fill="none" stroke="#454345" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <polygon points="82.51 2.45 68.49 6.52 82.51 10.59 96.53 6.52 82.51 2.45" fill="#fffffe" stroke="#454345" stroke-miterlimit="10"/>
                  </g>
                </g>
              </g>
            </svg>
    );
};

export default Delimiter;