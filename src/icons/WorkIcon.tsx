import React from 'react';
import { Icon, IconProps } from '../Icon';

export function WorkIcon({
  iconName = 'work',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
