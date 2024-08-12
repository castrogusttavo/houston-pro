import React from 'react'
import { Icon, IconProps } from '../Icon'

export function linerIcon({ iconName = "liner", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}