/**
 * Client slot/locale type augmentations for this plugin's settings row.
 */
import type { zh } from './index.tsx'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** The Colorscheme preference row's dictionary namespace. */
    'settings.colorscheme': keyof typeof zh
  }
}

export {}
