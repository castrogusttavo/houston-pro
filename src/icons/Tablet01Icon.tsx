import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Tablet01Icon({ iconName = "tablet01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}