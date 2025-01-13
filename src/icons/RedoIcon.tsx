import React from 'react';
import { Icon, IconProps } from '../Icon';

export function RedoIcon({
  iconName = 'redo',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
