import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pickup01Icon({ iconName = "pickup01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}