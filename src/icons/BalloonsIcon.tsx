import React from 'react';
import { Icon, IconProps } from '../Icon';

export function BalloonsIcon({
  iconName = 'balloons',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
