import React from 'react'
import { Icon, IconProps } from '../Icon'

export function globalEducationIcon({ iconName = "global-education", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}