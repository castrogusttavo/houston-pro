import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cursorHold01Icon({ iconName = "cursor-hold01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}