import React from 'react';
import { Icon, IconProps } from '../Icon';

export function GearsIcon({
  iconName = 'gears',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
