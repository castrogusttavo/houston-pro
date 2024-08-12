import React from 'react'
import { Icon, IconProps } from '../Icon'

export function city01Icon({ iconName = "city01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}