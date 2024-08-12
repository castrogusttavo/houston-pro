import React from 'react'
import { Icon, IconProps } from '../Icon'

export function programmingFlagIcon({ iconName = "programming-flag", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}