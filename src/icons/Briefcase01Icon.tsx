import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Briefcase01Icon({
  iconName = 'briefcase01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
