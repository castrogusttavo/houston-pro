import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Taxi02Icon({
  iconName = 'taxi-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
