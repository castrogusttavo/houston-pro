import React from 'react'
import { Icon, IconProps } from '../Icon'

export function droolingIcon({ iconName = "drooling", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}