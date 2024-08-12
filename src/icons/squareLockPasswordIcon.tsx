import React from 'react'
import { Icon, IconProps } from '../Icon'

export function squareLockPasswordIcon({ iconName = "square-lock-password", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}