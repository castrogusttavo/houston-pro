import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ReceiptDollarIcon({
  iconName = 'receipt-dollar',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
