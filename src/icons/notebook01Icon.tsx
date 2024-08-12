import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notebook01Icon({ iconName = "notebook01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}