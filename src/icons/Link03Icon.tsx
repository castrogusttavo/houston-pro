import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Link03Icon({ iconName = "link03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}