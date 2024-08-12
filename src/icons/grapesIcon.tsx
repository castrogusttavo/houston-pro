import React from 'react'
import { Icon, IconProps } from '../Icon'

export function grapesIcon({ iconName = "grapes", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}