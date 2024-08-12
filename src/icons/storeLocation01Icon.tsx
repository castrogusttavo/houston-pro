import React from 'react'
import { Icon, IconProps } from '../Icon'

export function storeLocation01Icon({ iconName = "store-location01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}