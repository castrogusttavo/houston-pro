import React from 'react'
import { Icon, IconProps } from '../Icon'

export function typeCursorIcon({ iconName = "type-cursor", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}