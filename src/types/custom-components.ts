import { ReactElement } from 'preact/compat'

export type CustomComponentMeta = {
  Component: ReactElement
  wrapperElement: HTMLElement
}

export type CustomComponentsMeta = CustomComponentMeta[]
