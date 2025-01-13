import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ChartDownIcon({
  iconName = 'chart-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
