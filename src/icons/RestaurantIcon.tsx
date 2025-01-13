import React from 'react';
import { Icon, IconProps } from '../Icon';

export function RestaurantIcon({
  iconName = 'restaurant',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
