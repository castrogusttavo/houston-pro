import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Appointment01Icon({
  iconName = 'appointment-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
