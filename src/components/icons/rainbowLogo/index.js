import React from 'react';
import PropTypes from 'prop-types';

const Rainbow = props => {
    const { className, style } = props;

    return (
        <svg
            className={className}
            style={style}
            width="48px"
            height="48px"
            viewBox="0 0 48 48" 
        >
            <g id="layout" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="main_dark" transform="translate(-169.000000, -185.000000)" fillRule="nonzero">
                    <g id="logo" transform="translate(169.000000, 185.000000)">
                        <rect id="Rectangle-path" fill="#323B45" x="2.0864" y="2.01226697" width="43.6906667" height="43.6559614" />
                        <rect id="Rectangle-path" stroke="#1DE9B6" fill="#1DE9B6" x="34.2450667" y="0.5" width="13.208" height="13.196714" rx="2" />
                        <rect id="Rectangle-path" stroke="#01B6F5" fill="#01B6F5" x="17.3576" y="0.5" width="13.208" height="13.196714" rx="2" />
                        <rect id="Rectangle-path" stroke="#FE4849" fill="#FE4849" x="0.593866667" y="0.5" width="13.208" height="13.196714" rx="2" />
                        <rect id="Rectangle-path" stroke="#F4F6F9" fill="#F4F6F9" x="34.1512" y="17.2418907" width="13.208" height="13.196714" rx="2" />
                        <rect id="Rectangle-path" stroke="#FFCC00" fill="#FFCC00" x="17.268" y="17.2418907" width="13.208" height="13.196714" rx="2" />
                        <rect id="Rectangle-path" stroke="#F8752D" fill="#F8752D" x="0.5" y="17.2418907" width="13.208" height="13.196714" rx="2" />
                        <rect id="Rectangle-path" stroke="#01B6F5" fill="#01B6F5" x="34.1512" y="33.979518" width="13.208" height="13.196714" rx="2" />
                        <rect id="Rectangle-path" stroke="#EA4243" fill="#EA4243" x="17.268" y="33.979518" width="13.208" height="13.196714" rx="2" />
                        <rect id="Rectangle-path" stroke="#1AD1A3" fill="#1AD1A3" x="0.5" y="33.979518" width="13.208" height="13.196714" rx="2" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

Rainbow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Rainbow.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Rainbow;
