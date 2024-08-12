import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mailSend01Icon({ iconName = "mail-send01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}