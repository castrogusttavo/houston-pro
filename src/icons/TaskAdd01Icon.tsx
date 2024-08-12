import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaskAdd01Icon({
  iconName = 'task-add01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
