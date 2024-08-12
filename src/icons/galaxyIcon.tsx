import React from 'react'
import { Icon, IconProps } from '../Icon'

export function galaxyIcon({ iconName = "galaxy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}