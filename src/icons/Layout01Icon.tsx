import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Layout01Icon({ iconName = "layout01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}