import React from 'react'
import { Icon, IconProps } from '../Icon'

export function resourcesRemoveIcon({ iconName = "resources-remove", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}