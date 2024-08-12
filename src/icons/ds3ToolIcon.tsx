import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ds3ToolIcon({ iconName = "ds3-tool", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}