import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hold03Icon({ iconName = "hold03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}