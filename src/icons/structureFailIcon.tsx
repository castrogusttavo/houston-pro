import React from 'react'
import { Icon, IconProps } from '../Icon'

export function structureFailIcon({ iconName = "structure-fail", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}