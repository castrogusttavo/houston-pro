import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ShutDownIcon({
  iconName = 'shut-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
