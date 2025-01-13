import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ShopifyIcon({
  iconName = 'shopify',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
