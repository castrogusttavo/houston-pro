import React from 'react'
import { Icon, IconProps } from '../Icon'

export function informationSquareIcon({ iconName = "information-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}