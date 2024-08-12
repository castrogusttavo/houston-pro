import React from 'react'
import { Icon, IconProps } from '../Icon'

export function perspectiveIcon({ iconName = "perspective", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}