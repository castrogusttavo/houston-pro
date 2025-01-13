import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Grid02Icon({
  iconName = 'grid-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
