import React from 'react'
import { Icon, IconProps } from '../Icon'

export function linkCircleIcon({ iconName = "link-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}