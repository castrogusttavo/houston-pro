import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gasStoveIcon({ iconName = "gas-stove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}