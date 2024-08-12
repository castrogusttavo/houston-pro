import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Store03Icon({ iconName = "store03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}