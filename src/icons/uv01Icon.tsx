import React from 'react'
import { Icon, IconProps } from '../Icon'

export function uv01Icon({ iconName = "uv01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}