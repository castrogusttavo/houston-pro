import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bankIcon({ iconName = "bank", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}