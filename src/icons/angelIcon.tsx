import React from 'react'
import { Icon, IconProps } from '../Icon'

export function angelIcon({ iconName = "angel", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}