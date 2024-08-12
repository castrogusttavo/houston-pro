import React from 'react'
import { Icon, IconProps } from '../Icon'

export function artboardToolIcon({ iconName = "artboard-tool", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}