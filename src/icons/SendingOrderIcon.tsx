import React from 'react';
import { Icon, IconProps } from '../Icon';

export function SendingOrderIcon({
  iconName = 'sending-order',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
