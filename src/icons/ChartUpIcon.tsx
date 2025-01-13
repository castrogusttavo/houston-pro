import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ChartUpIcon({
  iconName = 'chart-up',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
