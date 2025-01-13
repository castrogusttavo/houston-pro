import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AddTeam02Icon({
  iconName = 'add-team-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
