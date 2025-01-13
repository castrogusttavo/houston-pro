import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ManIcon({
  iconName = 'man',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
