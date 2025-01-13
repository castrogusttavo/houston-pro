import React from 'react';
import { Icon, IconProps } from '../Icon';

export function SiriNewIcon({
  iconName = 'siri-new',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
