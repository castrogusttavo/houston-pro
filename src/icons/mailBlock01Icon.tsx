import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mailBlock01Icon({ iconName = "mail-block01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}