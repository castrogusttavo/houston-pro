import React from 'react'
import { Icon, IconProps } from '../Icon'

export function catalogueIcon({ iconName = "catalogue", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}