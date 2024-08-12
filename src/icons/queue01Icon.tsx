import React from 'react'
import { Icon, IconProps } from '../Icon'

export function queue01Icon({ iconName = "queue01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}