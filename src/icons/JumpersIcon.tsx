import React from 'react';
import { Icon, IconProps } from '../Icon';

export function JumpersIcon({
  iconName = 'jumpers',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
