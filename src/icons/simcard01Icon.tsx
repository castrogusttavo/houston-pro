import React from 'react'
import { Icon, IconProps } from '../Icon'

export function simcard01Icon({ iconName = "simcard01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}