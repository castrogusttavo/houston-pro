import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dragDropVerticalIcon({ iconName = "drag-drop-vertical", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}