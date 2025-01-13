import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ServerStack01Icon({
  iconName = 'server-stack-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
