import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bounceLeftIcon({ iconName = "bounce-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}