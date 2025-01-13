import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Sent02Icon({
  iconName = 'sent-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
