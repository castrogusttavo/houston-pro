import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Medal01Icon({ iconName = "medal01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}