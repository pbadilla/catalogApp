import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  width: ${props => (props.size ? `${props.size}px` : '24px')};
  height: ${props => (props.size ? `${props.size}px` : '24px')};
`;

const SvgIcon = props => {
  const { children, htmlColor, titleAccess, viewBox = '0 0 24 24', ...other } = props;

  return (
    <Svg
      focusable='false'
      viewBox={viewBox}
      aria-hidden={titleAccess ? 'false' : 'true'}
      role={titleAccess ? 'img' : 'presentation'}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Svg>
  );
};

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
  htmlColor: PropTypes.string,
  titleAccess: PropTypes.string,
  viewBox: PropTypes.string,
};

export default SvgIcon;
