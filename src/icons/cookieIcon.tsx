import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cookieIcon({ iconName = "cookie", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}