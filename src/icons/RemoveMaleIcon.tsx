import React from 'react';
import { Icon, IconProps } from '../Icon';

export function RemoveMaleIcon({
  iconName = 'remove-male',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
