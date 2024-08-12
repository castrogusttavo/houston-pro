import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chess01Icon({ iconName = "chess01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}