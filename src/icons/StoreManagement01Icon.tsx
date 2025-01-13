import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StoreManagement01Icon({
  iconName = 'store-management-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
