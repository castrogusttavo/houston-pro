import React from 'react';
import { Icon, IconProps } from '../Icon';

export function FemaleSymbolIcon({
  iconName = 'female-symbol',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
