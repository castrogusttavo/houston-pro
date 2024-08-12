import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lockComputerIcon({ iconName = "lock-computer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}