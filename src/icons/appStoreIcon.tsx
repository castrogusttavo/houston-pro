import React from 'react'
import { Icon, IconProps } from '../Icon'

export function appStoreIcon({ iconName = "app-store", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}