import React from 'react';
import { Icon, IconProps } from '../Icon';

export function IceCubesIcon({
  iconName = 'ice-cubes',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
