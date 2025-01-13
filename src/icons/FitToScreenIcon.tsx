import React from 'react';
import { Icon, IconProps } from '../Icon';

export function FitToScreenIcon({
  iconName = 'fit-to-screen',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
