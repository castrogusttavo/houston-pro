import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AddToListIcon({
  iconName = 'add-to-list',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
