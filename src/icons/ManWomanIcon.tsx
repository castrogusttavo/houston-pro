import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ManWomanIcon({
  iconName = 'man-woman',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
