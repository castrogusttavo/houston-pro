import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lakeIcon({ iconName = "lake", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}