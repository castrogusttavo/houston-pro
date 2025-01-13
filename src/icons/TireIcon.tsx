import React from 'react';
import { Icon, IconProps } from '../Icon';

export function TireIcon({
  iconName = 'tire',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
