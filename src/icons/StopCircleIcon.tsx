import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StopCircleIcon({
  iconName = 'stop-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
