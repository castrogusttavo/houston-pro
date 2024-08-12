import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pipelineIcon({ iconName = "pipeline", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}