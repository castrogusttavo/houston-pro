import React from 'react'
import { Icon, IconProps } from '../Icon'

export function addCircleIcon({ iconName = "add-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}