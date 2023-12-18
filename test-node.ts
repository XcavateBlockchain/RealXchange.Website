const { ApiPromise, WsProvider } = require('@polkadot/api');
// Construct

async function main() {
  const wsProvider = new WsProvider(
    'wss://fraa-flashbox-2036-rpc.a.stagenet.tanssi.network'
  );
  const api = await ApiPromise.create({ provider: wsProvider });

  // Retrieve the chain name
  const chain = await api.rpc.system.chain();

  // Retrieve the latest header
  const lastHeader = await api.rpc.chain.getHeader();

  // Log the information
  console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
}

main();
