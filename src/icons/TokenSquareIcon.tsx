import React from 'react';
import { Icon, IconProps } from '../Icon';

export function TokenSquareIcon({
  iconName = 'token-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
