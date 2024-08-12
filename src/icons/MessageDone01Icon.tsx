import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageDone01Icon({
  iconName = 'message-done01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
