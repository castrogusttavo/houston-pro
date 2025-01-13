import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Pizza04Icon({
  iconName = 'pizza-04',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
