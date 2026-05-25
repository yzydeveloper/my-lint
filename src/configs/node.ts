import type { TypedFlatConfigItem } from '../types'

import { GLOB_SRC } from '../globs'
import { pluginNode } from '../plugins'

export async function node(): Promise<TypedFlatConfigItem[]> {
    return [
        {
            name: 'antfu/node/setup',
            plugins: {
                node: pluginNode,
            },
        },
        {
            files: [GLOB_SRC],
            name: 'antfu/node/rules',
            rules: {
                'node/handle-callback-err': ['error', '^(err|error)$'],
                'node/no-deprecated-api': 'error',
                'node/no-exports-assign': 'error',
                'node/no-new-require': 'error',
                'node/no-path-concat': 'error',
                'node/prefer-global/buffer': 'off',
                'node/prefer-global/process': 'off',
                'node/process-exit-as-throw': 'error',
            },
        },
    ]
}
