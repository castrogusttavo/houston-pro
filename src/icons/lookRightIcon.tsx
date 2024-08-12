import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lookRightIcon({ iconName = "look-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}