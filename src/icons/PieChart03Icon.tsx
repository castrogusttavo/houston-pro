import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PieChart03Icon({
  iconName = 'pie-chart-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
