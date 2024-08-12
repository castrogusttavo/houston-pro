import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AccountSetting01Icon({
  iconName = 'account-setting01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
