import React from 'react'
import { Icon, IconProps } from '../Icon'

export function penToolMinusIcon({ iconName = "pen-tool-minus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}