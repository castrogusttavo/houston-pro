import React from 'react'
import { Icon, IconProps } from '../Icon'

export function paypalIcon({ iconName = "paypal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}