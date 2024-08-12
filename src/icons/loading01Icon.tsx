import React from 'react'
import { Icon, IconProps } from '../Icon'

export function loading01Icon({ iconName = "loading01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}