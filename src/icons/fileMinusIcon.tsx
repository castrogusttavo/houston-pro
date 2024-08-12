import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileMinusIcon({ iconName = "file-minus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}