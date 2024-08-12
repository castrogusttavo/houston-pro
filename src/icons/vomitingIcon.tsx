import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vomitingIcon({ iconName = "vomiting", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}