import React from 'react';
import { Icon, IconProps } from '../Icon';

export function User02Icon({
  iconName = 'user-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
