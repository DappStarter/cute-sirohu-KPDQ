require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone foot custom rice sad attitude coral light army genre'; 
let testAccounts = [
"0x752c7e23adc5fc39bf39c2becef0152f7baab17dc3a9956a0bcc1fb04cd0b6c9",
"0xdacb4de0a371a51d4e868e3e9dd042474eab14ebbf2cc9646df730b3a62b1b56",
"0x242ab8b2742953c572e989fa0385b3d0d9bf205b1e7e21266437a5aee1f19d96",
"0x2049860999f1a7ff8958c04c24f6fa3f2235df63973e1e70459c677bb83aaee0",
"0xd37893f4b79eaf28927937c181eb53ac7f63c0e4fe05b9ae78075b5b07e76fd1",
"0xaed947ed608c16114297e3bf824fb23a4bfe448c3b8cffa7a34c3edfb0132606",
"0x2b157ad6b146fd64c80f3228b5053340b573a9e94adf845bbf77da57b549d0b0",
"0xd8800211f38118da1a8baf13ce329af170f32aceeace477e3dd60f1621e14a9d",
"0x4b07cb5950fe796569c1f6db98e2461844d77e078438651804d71881ee0b5cb1",
"0x27541f65b538da7284a39f628f240b371e0b03e4a5d3eb32cd5de3e82be346db"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


