import React from 'react'
import { Icon, IconProps } from '../Icon'

export function presentation01Icon({ iconName = "presentation01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}