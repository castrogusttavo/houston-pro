import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StopLossOrderIcon({
  iconName = 'stop-loss-order',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
