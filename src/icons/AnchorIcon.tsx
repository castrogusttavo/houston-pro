import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AnchorIcon({
  iconName = 'anchor',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
