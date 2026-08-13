/**
 * Cordis context augmentation for services this plugin consumes that live in
 * packages outside this project's typecheck graph (the profile composes them).
 * `ctx.settings` is already typed by @deepseek-ai/dsh-settings (a dependency);
 * only the optional webServer surface is augmented here.
 */
import type { IncomingMessage, ServerResponse } from 'node:http'

declare module '@deepseek-ai/cordis' {
  interface Context {
    /** Provided by @deepseek-ai/dsh-host-webserver when composed. */
    webServer?: {
      register(route: {
        kind: 'exact' | 'prefix'
        /** Absolute pathname, no trailing slash. */
        path: string
        handler: (req: IncomingMessage, res: ServerResponse) => void | Promise<void>
      }): () => void
    }
  }
}

export {}
