import React from 'react'
import { Icon, IconProps } from '../Icon'

export function taskDone01Icon({ iconName = "task-done01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}