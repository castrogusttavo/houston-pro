import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PenTool01Icon({ iconName = "pen-tool01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}