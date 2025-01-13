import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Package03Icon({
  iconName = 'package-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
