import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CursorEdit01Icon({
  iconName = 'cursor-edit01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
