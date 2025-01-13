import React from 'react';
import { Icon, IconProps } from '../Icon';

export function MarketOrderIcon({
  iconName = 'market-order',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
