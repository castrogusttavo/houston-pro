import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Pentagon01Icon({
  iconName = 'pentagon01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
