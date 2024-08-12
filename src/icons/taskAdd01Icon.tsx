import React from 'react'
import { Icon, IconProps } from '../Icon'

export function taskAdd01Icon({ iconName = "task-add01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}