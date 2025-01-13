import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Car05Icon({
  iconName = 'car-05',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
