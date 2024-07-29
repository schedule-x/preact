import { VNode } from 'preact'

export type CustomComponentMeta = {
  Component: VNode
  wrapperElement: HTMLElement
}

export type CustomComponentsMeta = CustomComponentMeta[]
