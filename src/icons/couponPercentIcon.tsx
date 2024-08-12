import React from 'react'
import { Icon, IconProps } from '../Icon'

export function couponPercentIcon({ iconName = "coupon-percent", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}