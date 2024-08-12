import React from 'react'
import { Icon, IconProps } from '../Icon'

export function universityIcon({ iconName = "university", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}