import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ChopsticksIcon({
  iconName = 'chopsticks',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
