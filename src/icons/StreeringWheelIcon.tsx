import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StreeringWheelIcon({
  iconName = 'streering-wheel',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
