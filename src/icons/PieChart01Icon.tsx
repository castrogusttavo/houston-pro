import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PieChart01Icon({
  iconName = 'pie-chart-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
