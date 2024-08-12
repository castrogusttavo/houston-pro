import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Book03Icon({ iconName = "book03", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}