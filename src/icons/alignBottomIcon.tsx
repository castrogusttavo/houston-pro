import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alignBottomIcon({ iconName = "align-bottom", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}