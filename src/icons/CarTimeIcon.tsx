import React from 'react';
import { Icon, IconProps } from '../Icon';

export function CarTimeIcon({
  iconName = 'car-time',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
