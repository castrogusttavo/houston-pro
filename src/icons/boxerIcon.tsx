import React from 'react'
import { Icon, IconProps } from '../Icon'

export function boxerIcon({ iconName = "boxer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}