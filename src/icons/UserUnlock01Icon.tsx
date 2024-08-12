import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserUnlock01Icon({
  iconName = 'user-unlock01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
