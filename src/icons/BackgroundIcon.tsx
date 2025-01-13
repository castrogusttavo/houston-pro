import React from 'react';
import { Icon, IconProps } from '../Icon';

export function BackgroundIcon({
  iconName = 'background',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
