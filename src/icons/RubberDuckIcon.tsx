import React from 'react';
import { Icon, IconProps } from '../Icon';

export function RubberDuckIcon({
  iconName = 'rubber-duck',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
