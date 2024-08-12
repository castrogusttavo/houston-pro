import React from 'react'
import { Icon, IconProps } from '../Icon'

export function taskDone02Icon({ iconName = "task-done02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}