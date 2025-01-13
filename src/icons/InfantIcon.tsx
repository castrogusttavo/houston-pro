import React from 'react';
import { Icon, IconProps } from '../Icon';

export function InfantIcon({
  iconName = 'infant',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
