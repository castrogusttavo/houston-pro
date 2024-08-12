import React from 'react'
import { Icon, IconProps } from '../Icon'

export function share01Icon({ iconName = "share01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}