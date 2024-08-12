import React from 'react'
import { Icon, IconProps } from '../Icon'

export function winkingIcon({ iconName = "winking", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}