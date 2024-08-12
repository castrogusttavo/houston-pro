import React from 'react'
import { Icon, IconProps } from '../Icon'

export function scrollIcon({ iconName = "scroll", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}