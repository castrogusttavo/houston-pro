import React from 'react';
import { Icon, IconProps } from '../Icon';

export function MaterialAndTextureIcon({
  iconName = 'material-and-texture',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
