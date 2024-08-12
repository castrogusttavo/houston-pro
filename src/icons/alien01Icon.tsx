import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alien01Icon({ iconName = "alien01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}