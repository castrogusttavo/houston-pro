import React from 'react';
import { Icon, IconProps } from '../Icon';

export function TankerTruckIcon({
  iconName = 'tanker-truck',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
