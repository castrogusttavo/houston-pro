import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ImageFlipHorizontalIcon({
  iconName = 'image-flip-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
