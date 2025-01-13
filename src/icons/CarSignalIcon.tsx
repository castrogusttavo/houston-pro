import React from 'react';
import { Icon, IconProps } from '../Icon';

export function CarSignalIcon({
  iconName = 'car-signal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
