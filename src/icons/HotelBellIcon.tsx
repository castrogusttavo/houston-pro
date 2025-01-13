import React from 'react';
import { Icon, IconProps } from '../Icon';

export function HotelBellIcon({
  iconName = 'hotel-bell',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
