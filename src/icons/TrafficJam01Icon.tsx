import React from 'react';
import { Icon, IconProps } from '../Icon';

export function TrafficJam01Icon({
  iconName = 'traffic-jam-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
