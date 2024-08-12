import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shutterstockIcon({ iconName = "shutterstock", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}