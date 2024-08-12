import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callingIcon({ iconName = "calling", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}