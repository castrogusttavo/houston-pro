import React from 'react';
import { Icon, IconProps } from '../Icon';

export function EcoLabIcon({
  iconName = 'eco-lab',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
