import React from 'react'
import { Icon, IconProps } from '../Icon'

export function taskRemove01Icon({ iconName = "task-remove01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}