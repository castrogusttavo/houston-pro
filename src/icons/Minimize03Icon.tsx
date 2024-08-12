import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Minimize03Icon({
  iconName = 'minimize03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
