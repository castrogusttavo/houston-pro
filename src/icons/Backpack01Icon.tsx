import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Backpack01Icon({
  iconName = 'backpack01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
