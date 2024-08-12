import React from 'react'
import { Icon, IconProps } from '../Icon'

export function penToolAddIcon({ iconName = "pen-tool-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}