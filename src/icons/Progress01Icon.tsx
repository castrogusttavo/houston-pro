import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Progress01Icon({
  iconName = 'progress-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
