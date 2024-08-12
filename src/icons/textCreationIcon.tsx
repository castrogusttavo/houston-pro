import React from 'react'
import { Icon, IconProps } from '../Icon'

export function textCreationIcon({ iconName = "text-creation", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}