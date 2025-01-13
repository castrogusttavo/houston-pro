import React from 'react';
import { Icon, IconProps } from '../Icon';

export function GiftCard02Icon({
  iconName = 'gift-card-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
