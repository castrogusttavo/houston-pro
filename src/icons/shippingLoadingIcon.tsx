import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shippingLoadingIcon({ iconName = "shipping-loading", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}