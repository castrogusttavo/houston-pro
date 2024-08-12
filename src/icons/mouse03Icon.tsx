import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mouse03Icon({ iconName = "mouse03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}