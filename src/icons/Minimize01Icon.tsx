import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Minimize01Icon({
  iconName = 'minimize01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
