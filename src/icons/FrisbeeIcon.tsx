import React from 'react';
import { Icon, IconProps } from '../Icon';

export function FrisbeeIcon({
  iconName = 'frisbee',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
