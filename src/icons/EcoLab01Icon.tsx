import React from 'react';
import { Icon, IconProps } from '../Icon';

export function EcoLab01Icon({
  iconName = 'eco-lab-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
