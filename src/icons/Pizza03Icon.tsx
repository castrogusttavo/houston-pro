import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Pizza03Icon({
  iconName = 'pizza-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
