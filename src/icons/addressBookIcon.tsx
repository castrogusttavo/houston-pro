import React from 'react'
import { Icon, IconProps } from '../Icon'

export function addressBookIcon({ iconName = "address-book", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}