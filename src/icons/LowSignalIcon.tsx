import React from 'react';
import { Icon, IconProps } from '../Icon';

export function LowSignalIcon({
  iconName = 'low-signal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
