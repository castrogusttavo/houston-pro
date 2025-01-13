import React from 'react';
import { Icon, IconProps } from '../Icon';

export function FullSignalIcon({
  iconName = 'full-signal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
