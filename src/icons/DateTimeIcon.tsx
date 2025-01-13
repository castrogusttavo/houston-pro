import React from 'react';
import { Icon, IconProps } from '../Icon';

export function DateTimeIcon({
  iconName = 'date-time',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
