import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textSquareIcon({ iconName = "text-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}