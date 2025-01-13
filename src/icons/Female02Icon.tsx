import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Female02Icon({
  iconName = 'female-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
