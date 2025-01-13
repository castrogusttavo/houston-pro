import React from 'react';
import { Icon, IconProps } from '../Icon';

export function BarChartHorizontalIcon({
  iconName = 'bar-chart-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
