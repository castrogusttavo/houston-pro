import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ServingFoodIcon({
  iconName = 'serving-food',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
