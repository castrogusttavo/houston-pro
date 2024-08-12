import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cdIcon({ iconName = "cd", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}