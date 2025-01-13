import React from 'react';
import { Icon, IconProps } from '../Icon';

export function MediumSignalIcon({
  iconName = 'medium-signal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
