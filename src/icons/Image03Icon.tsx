import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Image03Icon({
  iconName = 'image-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
