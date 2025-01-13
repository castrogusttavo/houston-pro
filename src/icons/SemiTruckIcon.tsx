import React from 'react';
import { Icon, IconProps } from '../Icon';

export function SemiTruckIcon({
  iconName = 'semi-truck',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
