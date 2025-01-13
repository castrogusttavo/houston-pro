import React from 'react';
import { Icon, IconProps } from '../Icon';

export function User03Icon({
  iconName = 'user-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
