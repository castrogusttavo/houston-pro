import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bloggerIcon({ iconName = "blogger", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}