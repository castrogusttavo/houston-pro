import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mediumSquareIcon({ iconName = "medium-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}