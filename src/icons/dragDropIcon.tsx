import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dragDropIcon({ iconName = "drag-drop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}