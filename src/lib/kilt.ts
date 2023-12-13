import { KILT_RPC_URL } from '@/config';
import * as Kilt from '@kiltprotocol/sdk-js';

export const kiltConnect = async () => {
  await Kilt.connect(KILT_RPC_URL);
};

export const kiltDisconnect = async () => {
  await Kilt.disconnect();
};

// const {
//   document: { uri }
// } = Kilt.Did.linkedInfoFromChain(encodedJohnDoeDetails);
// console.log(`My name is john_doe and this is my DID: "${uri}"`);
