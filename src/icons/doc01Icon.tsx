import React from 'react'
import { Icon, IconProps } from '../Icon'

export function doc01Icon({ iconName = "doc01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}