import React from 'react'
import { Icon, IconProps } from '../Icon'

export function route03Icon({ iconName = "route03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}