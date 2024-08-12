import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flag01Icon({ iconName = "flag01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}