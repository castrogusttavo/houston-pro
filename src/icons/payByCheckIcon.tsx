import React from 'react'
import { Icon, IconProps } from '../Icon'

export function payByCheckIcon({ iconName = "pay-by-check", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}