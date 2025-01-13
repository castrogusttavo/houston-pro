import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StatusIcon({
  iconName = 'status',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
