import React from 'react';
import { Icon, IconProps } from '../Icon';

export function GarlandsIcon({
  iconName = 'garlands',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
