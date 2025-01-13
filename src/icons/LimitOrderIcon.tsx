import React from 'react';
import { Icon, IconProps } from '../Icon';

export function LimitOrderIcon({
  iconName = 'limit-order',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
