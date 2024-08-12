import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rightAngleIcon({ iconName = "right-angle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}