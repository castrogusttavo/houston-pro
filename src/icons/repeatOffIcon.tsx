import React from 'react'
import { Icon, IconProps } from '../Icon'

export function repeatOffIcon({ iconName = "repeat-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}