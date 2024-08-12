import React from 'react'
import { Icon, IconProps } from '../Icon'

export function leftToRightListNumberIcon({ iconName = "left-to-right-list-number", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}