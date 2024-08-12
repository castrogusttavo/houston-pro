import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wifi01Icon({ iconName = "wifi01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}