import React from 'react'
import { Icon, IconProps } from '../Icon'

export function milkCoconutIcon({ iconName = "milk-coconut", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}