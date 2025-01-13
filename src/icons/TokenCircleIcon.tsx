import React from 'react';
import { Icon, IconProps } from '../Icon';

export function TokenCircleIcon({
  iconName = 'token-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
