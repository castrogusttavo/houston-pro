import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Appointment02Icon({
  iconName = 'appointment-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
