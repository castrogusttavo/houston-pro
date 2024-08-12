import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notebookIcon({ iconName = "notebook", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}