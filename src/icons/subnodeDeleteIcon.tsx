import React from 'react'
import { Icon, IconProps } from '../Icon'

export function subnodeDeleteIcon({ iconName = "subnode-delete", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}