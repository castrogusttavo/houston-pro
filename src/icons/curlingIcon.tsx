import React from 'react'
import { Icon, IconProps } from '../Icon'

export function curlingIcon({ iconName = "curling", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}