import React from 'react';
import { Icon, IconProps } from '../Icon';

export function BarChartIcon({
  iconName = 'bar-chart',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
