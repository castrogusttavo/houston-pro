import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Chart03Icon({
  iconName = 'chart-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
