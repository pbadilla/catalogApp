import React from 'react';
import SvgIcon from './SvgIcon';

/* eslint-disable react/no-multi-comp */

export default function createSvgIcon(path, displayName) {
  const Component = React.memo(props => (
    <SvgIcon data-testid={`${displayName}Icon`} {...props}>
      {path}
    </SvgIcon>
  ));

  if (process.env.NODE_ENV !== 'production') {
    Component.displayName = `${displayName}Icon`;
  }

  return Component;
}
