import React from 'react'
import { Icon, IconProps } from '../Icon'

export function touch03Icon({ iconName = "touch03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}