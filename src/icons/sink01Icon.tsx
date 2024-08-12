import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sink01Icon({ iconName = "sink01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}