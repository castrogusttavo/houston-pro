import React from 'react'
import { Icon, IconProps } from '../Icon'

export function locker01Icon({ iconName = "locker01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}