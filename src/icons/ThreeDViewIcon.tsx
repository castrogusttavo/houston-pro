import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ThreeDViewIcon({
  iconName = '3-d-view',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
