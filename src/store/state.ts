import Web3 from 'web3';
import { ApiPromise } from '@polkadot/api';

export const state = {
    counter: 0,
    web3Inst: Web3,
    substrateInst: ApiPromise,
};

export type State = typeof state;
