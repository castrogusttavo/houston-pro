import React from 'react'
import { Icon, IconProps } from '../Icon'

export function upworkIcon({ iconName = "upwork", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}