import React from 'react';
import { Icon, IconProps } from '../Icon';

export function EcoLab02Icon({
  iconName = 'eco-lab-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
