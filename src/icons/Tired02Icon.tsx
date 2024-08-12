import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Tired02Icon({ iconName = "tired02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}