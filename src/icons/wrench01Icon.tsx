import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wrench01Icon({ iconName = "wrench01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}