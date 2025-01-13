import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PineTreeIcon({
  iconName = 'pine-tree',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
