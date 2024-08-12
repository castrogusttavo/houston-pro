import React from 'react'
import { Icon, IconProps } from '../Icon'

export function diamond01Icon({ iconName = "diamond01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}