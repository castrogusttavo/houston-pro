import React from 'react'
import { Icon, IconProps } from '../Icon'

export function milkCartonIcon({ iconName = "milk-carton", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}