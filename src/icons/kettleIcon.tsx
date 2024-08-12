import React from 'react'
import { Icon, IconProps } from '../Icon'

export function kettleIcon({ iconName = "kettle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}