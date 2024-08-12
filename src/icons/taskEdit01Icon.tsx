import React from 'react'
import { Icon, IconProps } from '../Icon'

export function taskEdit01Icon({ iconName = "task-edit01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}