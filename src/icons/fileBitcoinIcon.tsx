import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fileBitcoinIcon({ iconName = "file-bitcoin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}