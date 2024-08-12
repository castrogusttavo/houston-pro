import React from 'react'
import { Icon, IconProps } from '../Icon'

export function safeDelivery02Icon({ iconName = "safe-delivery02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}