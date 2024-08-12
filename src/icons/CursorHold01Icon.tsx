import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorHold01Icon({ iconName = "cursor-hold01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}