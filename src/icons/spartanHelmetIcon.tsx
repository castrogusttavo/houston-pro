import React from 'react'
import { Icon, IconProps } from '../Icon'

export function spartanHelmetIcon({ iconName = "spartan-helmet", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}