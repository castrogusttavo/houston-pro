import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bus01Icon({ iconName = "bus01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}