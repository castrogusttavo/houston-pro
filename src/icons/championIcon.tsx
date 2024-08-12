import React from 'react'
import { Icon, IconProps } from '../Icon'

export function championIcon({ iconName = "champion", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}