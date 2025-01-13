import React from 'react';
import { Icon, IconProps } from '../Icon';

export function NoSignalIcon({
  iconName = 'no-signal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
