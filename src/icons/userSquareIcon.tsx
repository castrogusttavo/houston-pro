import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userSquareIcon({ iconName = "user-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}