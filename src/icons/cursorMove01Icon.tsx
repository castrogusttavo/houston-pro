import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cursorMove01Icon({ iconName = "cursor-move01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}