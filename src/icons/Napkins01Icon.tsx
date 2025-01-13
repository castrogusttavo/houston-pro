import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Napkins01Icon({
  iconName = 'napkins-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
