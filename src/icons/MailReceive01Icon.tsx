import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailReceive01Icon({
  iconName = 'mail-receive01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
