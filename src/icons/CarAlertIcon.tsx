import React from 'react';
import { Icon, IconProps } from '../Icon';

export function CarAlertIcon({
  iconName = 'car-alert',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
