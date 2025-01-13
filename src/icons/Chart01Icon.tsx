import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Chart01Icon({
  iconName = 'chart-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
