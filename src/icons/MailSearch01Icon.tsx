import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailSearch01Icon({
  iconName = 'mail-search01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
