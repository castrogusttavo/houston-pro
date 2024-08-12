import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cursorPointer01Icon({ iconName = "cursor-pointer01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}