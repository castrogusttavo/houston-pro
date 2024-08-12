import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wantedIcon({ iconName = "wanted", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}