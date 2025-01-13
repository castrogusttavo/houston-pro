import React from 'react';
import { Icon, IconProps } from '../Icon';

export function MollieIcon({
  iconName = 'mollie',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
