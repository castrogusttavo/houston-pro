import React from 'react'
import { Icon, IconProps } from '../Icon'

export function capProjectingIcon({ iconName = "cap-projecting", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}