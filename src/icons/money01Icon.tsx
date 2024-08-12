import React from 'react'
import { Icon, IconProps } from '../Icon'

export function money01Icon({ iconName = "money01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}