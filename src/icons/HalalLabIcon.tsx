import React from 'react';
import { Icon, IconProps } from '../Icon';

export function HalalLabIcon({
  iconName = 'halal-lab',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
