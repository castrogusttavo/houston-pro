import React from 'react';
import { Icon, IconProps } from '../Icon';

export function RockingHorseIcon({
  iconName = 'rocking-horse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
