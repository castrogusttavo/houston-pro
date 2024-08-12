import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Wrench01Icon({ iconName = "wrench01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}