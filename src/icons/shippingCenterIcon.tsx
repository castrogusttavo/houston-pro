import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shippingCenterIcon({ iconName = "shipping-center", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}