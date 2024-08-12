import React from 'react'
import { Icon, IconProps } from '../Icon'

export function delete02Icon({ iconName = "delete02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}