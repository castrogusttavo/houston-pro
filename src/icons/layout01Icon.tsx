import React from 'react'
import { Icon, IconProps } from '../Icon'

export function layout01Icon({ iconName = "layout01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}