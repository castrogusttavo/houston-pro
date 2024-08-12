import React from 'react'
import { Icon, IconProps } from '../Icon'

export function structureCheckIcon({ iconName = "structure-check", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}