import React from 'react'
import { Icon, IconProps } from '../Icon'

export function album01Icon({ iconName = "album01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}