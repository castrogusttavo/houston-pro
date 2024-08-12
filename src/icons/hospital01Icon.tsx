import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hospital01Icon({ iconName = "hospital01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}