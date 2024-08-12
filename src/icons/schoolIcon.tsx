import React from 'react'
import { Icon, IconProps } from '../Icon'

export function schoolIcon({ iconName = "school", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}