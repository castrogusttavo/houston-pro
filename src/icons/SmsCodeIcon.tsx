import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SmsCodeIcon({ iconName = 'sms-code', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
