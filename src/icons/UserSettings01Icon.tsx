import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserSettings01Icon({
  iconName = 'user-settings01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
