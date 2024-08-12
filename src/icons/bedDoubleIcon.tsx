import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bedDoubleIcon({ iconName = "bed-double", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}