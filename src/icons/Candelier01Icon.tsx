import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Candelier01Icon({
  iconName = 'candelier01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
