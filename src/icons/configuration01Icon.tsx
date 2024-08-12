import React from 'react'
import { Icon, IconProps } from '../Icon'

export function configuration01Icon({ iconName = "configuration01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}