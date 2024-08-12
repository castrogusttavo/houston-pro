import React from 'react'
import { Icon, IconProps } from '../Icon'

export function libraryIcon({ iconName = "library", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}