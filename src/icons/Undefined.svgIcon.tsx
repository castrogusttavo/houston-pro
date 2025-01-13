import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Undefined.svgIcon({
  iconName = 'undefined.svg',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
