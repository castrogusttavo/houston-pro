import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AddMoneyCircleIcon({
  iconName = 'add-money-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
