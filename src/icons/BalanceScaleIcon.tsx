import React from 'react';
import { Icon, IconProps } from '../Icon';

export function BalanceScaleIcon({
  iconName = 'balance-scale',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
