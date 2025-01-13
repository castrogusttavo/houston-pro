import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StreetFoodIcon({
  iconName = 'street-food',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
