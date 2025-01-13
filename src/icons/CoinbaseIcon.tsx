import React from 'react';
import { Icon, IconProps } from '../Icon';

export function CoinbaseIcon({
  iconName = 'coinbase',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
