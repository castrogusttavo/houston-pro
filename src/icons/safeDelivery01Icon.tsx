import React from 'react'
import { Icon, IconProps } from '../Icon'

export function safeDelivery01Icon({ iconName = "safe-delivery01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}