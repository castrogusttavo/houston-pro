import React from 'react'
import { Icon, IconProps } from '../Icon'

export function idea01Icon({ iconName = "idea01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}