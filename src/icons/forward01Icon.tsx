import React from 'react'
import { Icon, IconProps } from '../Icon'

export function forward01Icon({ iconName = "forward01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}