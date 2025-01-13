import React from 'react';
import { Icon, IconProps } from '../Icon';

export function BinocularsIcon({
  iconName = 'binoculars',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
