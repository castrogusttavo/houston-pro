import React from 'react'
import { Icon, IconProps } from '../Icon'

export function addSquareIcon({ iconName = "add-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}