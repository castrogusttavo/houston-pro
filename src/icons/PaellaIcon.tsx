import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PaellaIcon({
  iconName = 'paella',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
