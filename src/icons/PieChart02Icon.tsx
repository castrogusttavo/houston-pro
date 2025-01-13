import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PieChart02Icon({
  iconName = 'pie-chart-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
