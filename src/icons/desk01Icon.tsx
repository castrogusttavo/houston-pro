import React from 'react'
import { Icon, IconProps } from '../Icon'

export function desk01Icon({ iconName = "desk01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}