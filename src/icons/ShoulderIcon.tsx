import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ShoulderIcon({
  iconName = 'shoulder',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
