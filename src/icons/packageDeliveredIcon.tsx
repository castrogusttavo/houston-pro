import React from 'react'
import { Icon, IconProps } from '../Icon'

export function packageDeliveredIcon({ iconName = "package-delivered", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}