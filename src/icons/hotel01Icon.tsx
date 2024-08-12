import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hotel01Icon({ iconName = "hotel01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}