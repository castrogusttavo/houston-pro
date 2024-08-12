import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hdr01Icon({ iconName = "hdr01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}