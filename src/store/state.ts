import Web3 from 'web3';

export const state = {
    counter: 0,
    web3Inst: Web3,
};

export type State = typeof state;
