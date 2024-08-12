import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dentalBrokenToothIcon({ iconName = "dental-broken-tooth", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}