import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AddMaleIcon({
  iconName = 'add-male',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
