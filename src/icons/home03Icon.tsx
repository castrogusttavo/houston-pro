import React from 'react'
import { Icon, IconProps } from '../Icon'

export function home03Icon({ iconName = "home03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}