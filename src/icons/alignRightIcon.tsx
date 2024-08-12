import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alignRightIcon({ iconName = "align-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}