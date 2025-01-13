import React from 'react';
import { Icon, IconProps } from '../Icon';

export function UserGroup02Icon({
  iconName = 'user-group-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
