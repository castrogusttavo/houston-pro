import React from 'react'
import { Icon, IconProps } from '../Icon'

export function html5Icon({ iconName = "html5", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}