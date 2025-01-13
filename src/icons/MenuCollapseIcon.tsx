import React from 'react';
import { Icon, IconProps } from '../Icon';

export function MenuCollapseIcon({
  iconName = 'menu-collapse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
