import React from 'react'
import { Icon, IconProps } from '../Icon'

export function customerSupportIcon({ iconName = "customer-support", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}