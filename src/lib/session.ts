'use client';

import type {
  DidResourceUri,
  IEncryptedMessage,
  KiltAddress
} from '@kiltprotocol/sdk-js';
import { HexString } from '@polkadot/util/types';
import { isHex } from '@polkadot/util';
import { checkSession, getSessionValues } from '@/app/actions/sporran';
import { getExtensions } from 'kilt-extension-api';

export type This = typeof globalThis;

export interface IEncryptedMessageV1 {
  /** ID of the key agreement key of the receiver DID used to encrypt the message */
  receiverKeyId: DidResourceUri;

  /** ID of the key agreement key of the sender DID used to encrypt the message */
  senderKeyId: DidResourceUri;

  /** ciphertext as hexadecimal */
  ciphertext: string;

  /** 24 bytes nonce as hexadecimal */
  nonce: string;
}

export interface PubSubSessionV1 {
  /** Configure the callback the extension must use to send messages to the dApp. Overrides previous values. */
  listen: (callback: (message: IEncryptedMessageV1) => Promise<void>) => Promise<void>;

  /** send the encrypted message to the extension */
  send: (message: IEncryptedMessageV1) => Promise<void>;

  /** close the session and stop receiving further messages */
  close: () => Promise<void>;

  /** ID of the key agreement key of the temporary DID the extension will use to encrypt the session messages */
  encryptionKeyId: string;

  /** bytes as hexadecimal */
  encryptedChallenge: string;

  /** 24 bytes nonce as hexadecimal */
  nonce: string;
}

export interface PubSubSessionV2 {
  /** Configure the callback the extension must use to send messages to the dApp. Overrides previous values. */
  listen: (callback: (message: IEncryptedMessage) => Promise<void>) => Promise<void>;

  /** send the encrypted message to the extension */
  send: (message: IEncryptedMessage) => Promise<void>;

  /** close the session and stop receiving further messages */
  close: () => Promise<void>;

  /** ID of the key agreement key of the temporary DID the extension will use to encrypt the session messages */
  encryptionKeyUri: DidResourceUri;

  /** bytes as hexadecimal */
  encryptedChallenge: string;

  /** 24 bytes nonce as hexadecimal */
  nonce: string;
}

export interface InjectedWindowProvider<T> {
  startSession: (
    dAppName: string,
    dAppEncryptionKeyId: DidResourceUri,
    challenge: string
  ) => Promise<T>;

  name: string;
  version: string;
  specVersion: '1.0' | '3.0';

  signWithDid: (
    plaintext: string
  ) => Promise<{ signature: string; didKeyUri: DidResourceUri }>;

  signExtrinsicWithDid: (
    extrinsic: HexString,
    signer: KiltAddress
  ) => Promise<{ signed: HexString; didKeyUri: DidResourceUri }>;

  getSignedDidCreationExtrinsic: (
    submitter: KiltAddress
  ) => Promise<{ signedExtrinsic: HexString }>;
}

export interface ApiWindow extends This {
  kilt: Record<string, InjectedWindowProvider<PubSubSessionV1 | PubSubSessionV2>>;
}

export function getCompatibleExtensions(): Array<string> {
  // const { kilt } = window || {};

  // if (kilt) {
  //   return Object.entries(kilt)
  //     .filter(([, provider]: any) => provider.specVersion.startsWith('3.'))
  //     .map(([name]) => name);
  // } else {
  //   console.error('kilt is not defined');
  //
  // }

  return [];
}

export type Session = PubSubSessionV1 &
  PubSubSessionV2 & {
    sessionId: string;
    name: string;
  };

export async function getSession(provider: any) {
  // Find all injected extensions
  const extensions = getExtensions();

  // Choose an extension to interact with:
  //  let extension = extensions.find((ext) => ext.name === nameOfSelectedExtension)

  if (provider === undefined) {
    provider = extensions.find(ext => ext !== undefined);
  }
  if (provider === undefined) {
    throw new Error(
      'No KILT-Protocol-supportive extension was found. Can not login. \n Try installing Sporran first. '
    );
  }

  console.log({ provider });

  const { dAppEncryptionKeyUri, challenge, sessionId } = await getSessionValues();
  const dAppName = 'CertifiedProof';

  console.log({ dAppEncryptionKeyUri });
  console.log({ challenge });
  console.log({ sessionId });

  const session = await provider.startSession(dAppName, dAppEncryptionKeyUri, challenge);

  const { encryptionKeyUri, encryptedChallenge, nonce } = session;
  await checkSession(
    {
      encryptionKeyUri,
      encryptedChallenge,
      nonce
    },
    sessionId
  );

  const { name } = provider;

  return { ...session, sessionId, name };
}
