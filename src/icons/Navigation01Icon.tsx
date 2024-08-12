import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Navigation01Icon({
  iconName = 'navigation01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
