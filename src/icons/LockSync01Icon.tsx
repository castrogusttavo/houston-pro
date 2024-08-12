import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LockSync01Icon({
  iconName = 'lock-sync01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
