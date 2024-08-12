import React from 'react'
import { Icon, IconProps } from '../Icon'

export function uv03Icon({ iconName = "uv03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}