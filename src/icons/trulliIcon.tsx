import React from 'react'
import { Icon, IconProps } from '../Icon'

export function trulliIcon({ iconName = "trulli", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}