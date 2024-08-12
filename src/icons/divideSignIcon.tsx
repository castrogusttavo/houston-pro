import React from 'react'
import { Icon, IconProps } from '../Icon'

export function divideSignIcon({ iconName = "divide-sign", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}