import React from 'react'
import { Icon, IconProps } from '../Icon'

export function factory01Icon({ iconName = "factory01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}