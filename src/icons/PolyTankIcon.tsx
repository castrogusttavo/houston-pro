import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PolyTankIcon({
  iconName = 'poly-tank',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
