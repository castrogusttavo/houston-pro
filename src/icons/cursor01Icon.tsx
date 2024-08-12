import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cursor01Icon({ iconName = "cursor01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}