import React from 'react'
import { Icon, IconProps } from '../Icon'

export function knife01Icon({ iconName = "knife01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}