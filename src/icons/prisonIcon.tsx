import React from 'react'
import { Icon, IconProps } from '../Icon'

export function prisonIcon({ iconName = "prison", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}