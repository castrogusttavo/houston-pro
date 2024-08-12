import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lookBottomIcon({ iconName = "look-bottom", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}