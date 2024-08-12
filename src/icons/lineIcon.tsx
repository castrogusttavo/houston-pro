import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lineIcon({ iconName = "line", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}