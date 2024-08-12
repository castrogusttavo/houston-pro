import React from 'react'
import { Icon, IconProps } from '../Icon'

export function scrollVerticalIcon({ iconName = "scroll-vertical", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}