import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Facebook01Icon({
  iconName = 'facebook01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
