import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Pin02Icon({
  iconName = 'pin-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
