import React from 'react'
import { Icon, IconProps } from '../Icon'

export function medal01Icon({ iconName = "medal01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}