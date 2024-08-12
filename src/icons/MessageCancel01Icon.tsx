import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageCancel01Icon({
  iconName = 'message-cancel01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
