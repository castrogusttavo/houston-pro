import React from 'react'
import { Icon, IconProps } from '../Icon'

export function removeSquareIcon({ iconName = "remove-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}