import React from 'react';
import { Icon, IconProps } from '../Icon';

export function BashIcon({
  iconName = 'bash',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
