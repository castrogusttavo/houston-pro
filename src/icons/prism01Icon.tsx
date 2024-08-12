import React from 'react'
import { Icon, IconProps } from '../Icon'

export function prism01Icon({ iconName = "prism01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}