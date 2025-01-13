import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Chart02Icon({
  iconName = 'chart-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
