import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pencilIcon({ iconName = "pencil", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}