import React from 'react';
import { Icon, IconProps } from '../Icon';

export function KlarnaIcon({
  iconName = 'klarna',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
