require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remain punch gloom problem off topple'; 
let testAccounts = [
"0x0c7c83690541d9d817d672437a929d60e1815804038adcd8379d6a94b2bd3484",
"0x99110c99d7cc5e447e88d4521d10966bef01b520e246b6649787b353f4b79265",
"0x34d1125f62cae73a08a2537074650aa3411199e3fd3d7c15442345437b01b93f",
"0x71b2f535c6d8f09e299eb0e6fd9457758816d38a29594967daf5e705fe2ed420",
"0x8c48660837db052912dba90862600cba808bcc3822bbb31c8ca45d2aa77852d6",
"0x829288ed9de3b6ce70eadaaafca589fc9cd5268a52f052cb32335ed976970117",
"0x3568ef1db542d9c8cf7da13808f9a06ab8994b557d5fb0c17bbbf2d2cd191069",
"0xfb1210e7e049f99593a4b71d4efd42dbfb3515fd8f4650bd3a3e7fc6723c7118",
"0xd7b29bdbc5eea9836885cec9b688089c0585a20dd398d8564d0cd9a4a7902ad8",
"0xd920fb60c2123102346fdd1d8dc4a7aa4b428b2224b6c1d064b2d3916f021ea7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

