import React from 'react'
import { Icon, IconProps } from '../Icon'

export function comment01Icon({ iconName = "comment01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}