import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ImageFlipVerticalIcon({
  iconName = 'image-flip-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
