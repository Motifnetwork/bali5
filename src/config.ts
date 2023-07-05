/* eslint-disable sonarjs/no-duplicate-string */
import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'polkadot',
    prefix: 'polkadot',
    dataSource: {
        archive: 'https://polkadot.archive.subsquid.io/graphql',
        chain: 'wss://rpc.polkadot.io',
    },
    typesBundle: 'polkadot',
    batchSize: 10,
}

export default config
