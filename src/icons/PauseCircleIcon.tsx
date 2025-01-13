import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PauseCircleIcon({
  iconName = 'pause-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
