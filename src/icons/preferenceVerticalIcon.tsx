import React from 'react'
import { Icon, IconProps } from '../Icon'

export function preferenceVerticalIcon({ iconName = "preference-vertical", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}