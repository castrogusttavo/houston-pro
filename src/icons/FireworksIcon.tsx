import React from 'react';
import { Icon, IconProps } from '../Icon';

export function FireworksIcon({
  iconName = 'fireworks',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
