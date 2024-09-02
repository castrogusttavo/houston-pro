import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoneySafeIcon({
  iconName = 'money-safe',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
