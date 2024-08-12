import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bitcoinSettingIcon({ iconName = "bitcoin-setting", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}