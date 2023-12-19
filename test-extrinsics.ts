const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/api');

type ExtrinsicResult = {
  status: {
    isInBlock: boolean;
    asInBlock: string;
    isFinalized: boolean;
    asFinalized: string;
  };
};

async function main() {
  const wsProvider = new WsProvider(
    'wss://fraa-flashbox-2036-rpc.a.stagenet.tanssi.network'
  );
  const api = await ApiPromise.create({ provider: wsProvider });

  const keyring = new Keyring({ type: 'sr25519' });

  const eve = keyring.addFromUri(
    'bottom drive obey lake curtain smoke basket hold race lonely fit walk//Eve'
  );
  const unsub = await api.tx.communityProject
    .listProject(
      [{ price: 1000, amount: 10 }], // Nft price and amount to be created
      ['0x546869732069732074657374206465736372697074696f6e206f6620746865204e4654'], // Meta data for the NFT type to be created in hex format
      12, // duration
      10000, // project funding target
      '0x546869732069732074657374206465736372697074696f6e206f66207468652070726f6a656374' // project metadata - description etc, in hex format
    )
    .signAndSend(eve, (result: ExtrinsicResult) => {
      console.log(`Current status is ${result.status}`);

      if (result.status.isInBlock) {
        console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
      } else if (result.status.isFinalized) {
        console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
        unsub();
      }
    });

  const bob = keyring.addFromUri(
    'bottom drive obey lake curtain smoke basket hold race lonely fit walk//Bob'
  );
  const unsubBuy = await api.tx.communityProject
    .buyNft(
      3, // collection id
      1, // nft type
      1 // number of NFTs to buy
    )
    .signAndSend(bob, (result: ExtrinsicResult) => {
      console.log(`Current status is ${result.status}`);

      if (result.status.isInBlock) {
        console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
      } else if (result.status.isFinalized) {
        console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
        unsubBuy();
      }
    });
}

main();
