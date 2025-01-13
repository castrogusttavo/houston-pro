import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AddFemaleIcon({
  iconName = 'add-female',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
