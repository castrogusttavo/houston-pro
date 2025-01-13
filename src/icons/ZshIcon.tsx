import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ZshIcon({
  iconName = 'zsh',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
