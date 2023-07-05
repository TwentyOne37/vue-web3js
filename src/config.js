/*  USDC
    https://arbiscan.io/token/0xaf88d065e77c8cc2239327c5edb3a432268e5831#code
*/
export const USDC_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementationContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [],
    name: "admin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newAdmin", type: "address" }],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
export const USDC_ADDRESS = "0xaf88d065e77c8cC2239327C5EDb3A432268e5831";

// artifacts in crypto-mapp directory
export const MERCHANT_REGISTRY_ABI = [
  {
    _format: "hh-sol-artifact-1",
    contractName: "MerchantRegistry",
    sourceName: "contracts/MerchantRegistry.sol",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "daoAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "ethUsdPriceFeedAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "trustedForwarderAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "initialRegistrationFeeUsd",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "acceptedTokenAddresses",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "acceptedTokens",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        name: "addAcceptedToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "categories",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getAcceptedTokens",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "getApproved",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getTrustedForwarder",
        outputs: [
          {
            internalType: "address",
            name: "forwarder",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "forwarder",
            type: "address",
          },
        ],
        name: "isTrustedForwarder",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "merchants",
        outputs: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "merchantAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "int256",
            name: "latitude",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "longitude",
            type: "int256",
          },
          {
            internalType: "string",
            name: "physicalAddress",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "merchantAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "int256",
                name: "latitude",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "longitude",
                type: "int256",
              },
              {
                internalType: "string",
                name: "physicalAddress",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "category",
                type: "uint256",
              },
            ],
            internalType: "struct MerchantRegistry.Merchant",
            name: "_merchant",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "registrationFeeUsd",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        name: "removeAcceptedToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_newRegistrationFeeUsd",
            type: "uint256",
          },
        ],
        name: "setRegistrationFeeUsd",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "trustedForwarder",
            type: "address",
          },
        ],
        name: "setTrustedForwarder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "tokenByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "tokenDecimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "tokenURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    bytecode:
      "0x60806040523480156200001157600080fd5b506040516200601e3803806200601e833981810160405281019062000037919062000806565b6040518060400160405280600a81526020017f4d65726368616e744944000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d494400000000000000000000000000000000000000000000000000000000008152508160009081620000b4919062000ae8565b508060019081620000c6919062000ae8565b505050620000e9620000dd6200041860201b60201c565b620004a660201b60201c565b620000fa846200056c60201b60201c565b6001600c6000735592ec0cfb4dbc12d3ab100b257153436a1f0fea73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600c6000734dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600c600073d9ba894e0097f8cc2bbc9d24d308b98e36dc6d0273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506012600d6000735592ec0cfb4dbc12d3ab100b257153436a1f0fea73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055506012600d6000734dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055506006600d600073d9ba894e0097f8cc2bbc9d24d308b98e36dc6d0273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff16021790555082601160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081601260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806013819055505050505062000cea565b60008073ffffffffffffffffffffffffffffffffffffffff16601260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146200048b57620004856200060260201b62001cc41760201c565b620004a1565b620004a06200064460201b62001cfb1760201c565b5b905090565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6200057c6200064c60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620005ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005e59062000c56565b60405180910390fd5b620005ff81620004a660201b60201c565b50565b600060146000369050101580156200062757506200062633620006dd60201b60201c565b5b156200063d57601436033560601c905062000641565b3390505b90565b600033905090565b6200065c6200041860201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620006826200073760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620006db576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006d29062000cc8565b60405180910390fd5b565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620007938262000766565b9050919050565b620007a58162000786565b8114620007b157600080fd5b50565b600081519050620007c5816200079a565b92915050565b6000819050919050565b620007e081620007cb565b8114620007ec57600080fd5b50565b6000815190506200080081620007d5565b92915050565b6000806000806080858703121562000823576200082262000761565b5b60006200083387828801620007b4565b94505060206200084687828801620007b4565b93505060406200085987828801620007b4565b92505060606200086c87828801620007ef565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620008fa57607f821691505b60208210810362000910576200090f620008b2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200097a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200093b565b6200098686836200093b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620009c9620009c3620009bd84620007cb565b6200099e565b620007cb565b9050919050565b6000819050919050565b620009e583620009a8565b620009fd620009f482620009d0565b84845462000948565b825550505050565b600090565b62000a1462000a05565b62000a21818484620009da565b505050565b5b8181101562000a495762000a3d60008262000a0a565b60018101905062000a27565b5050565b601f82111562000a985762000a628162000916565b62000a6d846200092b565b8101602085101562000a7d578190505b62000a9562000a8c856200092b565b83018262000a26565b50505b505050565b600082821c905092915050565b600062000abd6000198460080262000a9d565b1980831691505092915050565b600062000ad8838362000aaa565b9150826002028217905092915050565b62000af38262000878565b67ffffffffffffffff81111562000b0f5762000b0e62000883565b5b62000b1b8254620008e1565b62000b2882828562000a4d565b600060209050601f83116001811462000b60576000841562000b4b578287015190505b62000b57858262000aca565b86555062000bc7565b601f19841662000b708662000916565b60005b8281101562000b9a5784890151825560018201915060208501945060208101905062000b73565b8683101562000bba578489015162000bb6601f89168262000aaa565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600062000c3e60268362000bcf565b915062000c4b8262000be0565b604082019050919050565b6000602082019050818103600083015262000c718162000c2f565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600062000cb060208362000bcf565b915062000cbd8262000c78565b602082019050919050565b6000602082019050818103600083015262000ce38162000ca1565b9050919050565b6153248062000cfa6000396000f3fe6080604052600436106101ee5760003560e01c8063715018a61161010d578063b88d4fde116100a0578063ce1b815f1161006f578063ce1b815f14610766578063d8134a2314610791578063da742228146107ba578063e985e9c5146107e3578063f2fde38b14610820576101ee565b8063b88d4fde146106a7578063bdac5fe9146106d0578063c6cdbe5e146106ec578063c87b56dd14610729576101ee565b80638ee573ac116100dc5780638ee573ac146105d357806392c8823b1461061057806395d89b4114610653578063a22cb4651461067e576101ee565b8063715018a61461051757806382dc4a051461052e5780638912fbfb1461056b5780638da5cb5b146105a8576101ee565b8063310d8c5611610185578063514c612b11610154578063514c612b14610435578063572b6c05146104605780636352211e1461049d57806370a08231146104da576101ee565b8063310d8c561461037d5780633eee83f1146103a657806342842e0e146103cf5780634f6ccce7146103f8576101ee565b806318160ddd116101c157806318160ddd146102c157806323b872dd146102ec5780632f745c59146103155780632f75700614610352576101ee565b806301ffc9a7146101f357806306fdde0314610230578063081812fc1461025b578063095ea7b314610298575b600080fd5b3480156101ff57600080fd5b5061021a600480360381019061021591906134b3565b610849565b60405161022791906134fb565b60405180910390f35b34801561023c57600080fd5b506102456108c3565b60405161025291906135a6565b60405180910390f35b34801561026757600080fd5b50610282600480360381019061027d91906135fe565b610955565b60405161028f919061366c565b60405180910390f35b3480156102a457600080fd5b506102bf60048036038101906102ba91906136b3565b61099b565b005b3480156102cd57600080fd5b506102d6610ab2565b6040516102e39190613702565b60405180910390f35b3480156102f857600080fd5b50610313600480360381019061030e919061371d565b610abf565b005b34801561032157600080fd5b5061033c600480360381019061033791906136b3565b610b1f565b6040516103499190613702565b60405180910390f35b34801561035e57600080fd5b50610367610bc4565b604051610374919061382e565b60405180910390f35b34801561038957600080fd5b506103a4600480360381019061039f91906135fe565b610c52565b005b3480156103b257600080fd5b506103cd60048036038101906103c89190613850565b610c64565b005b3480156103db57600080fd5b506103f660048036038101906103f1919061371d565b610db7565b005b34801561040457600080fd5b5061041f600480360381019061041a91906135fe565b610dd7565b60405161042c9190613702565b60405180910390f35b34801561044157600080fd5b5061044a610e48565b6040516104579190613702565b60405180910390f35b34801561046c57600080fd5b5061048760048036038101906104829190613850565b610e4e565b60405161049491906134fb565b60405180910390f35b3480156104a957600080fd5b506104c460048036038101906104bf91906135fe565b610ea8565b6040516104d1919061366c565b60405180910390f35b3480156104e657600080fd5b5061050160048036038101906104fc9190613850565b610f2e565b60405161050e9190613702565b60405180910390f35b34801561052357600080fd5b5061052c610fe5565b005b34801561053a57600080fd5b5061055560048036038101906105509190613850565b610ff9565b60405161056291906134fb565b60405180910390f35b34801561057757600080fd5b50610592600480360381019061058d91906135fe565b611019565b60405161059f919061366c565b60405180910390f35b3480156105b457600080fd5b506105bd611058565b6040516105ca919061366c565b60405180910390f35b3480156105df57600080fd5b506105fa60048036038101906105f59190613850565b611082565b6040516106079190613899565b60405180910390f35b34801561061c57600080fd5b50610637600480360381019061063291906135fe565b6110a2565b60405161064a97969594939291906138cd565b60405180910390f35b34801561065f57600080fd5b50610668611214565b60405161067591906135a6565b60405180910390f35b34801561068a57600080fd5b506106a560048036038101906106a09190613976565b6112a6565b005b3480156106b357600080fd5b506106ce60048036038101906106c99190613aeb565b6112bc565b005b6106ea60048036038101906106e59190613d31565b61131e565b005b3480156106f857600080fd5b50610713600480360381019061070e91906135fe565b6117b3565b60405161072091906135a6565b60405180910390f35b34801561073557600080fd5b50610750600480360381019061074b91906135fe565b611853565b60405161075d91906135a6565b60405180910390f35b34801561077257600080fd5b5061077b6118bb565b604051610788919061366c565b60405180910390f35b34801561079d57600080fd5b506107b860048036038101906107b39190613850565b6118e5565b005b3480156107c657600080fd5b506107e160048036038101906107dc9190613850565b611b61565b005b3480156107ef57600080fd5b5061080a60048036038101906108059190613d8d565b611bad565b60405161081791906134fb565b60405180910390f35b34801561082c57600080fd5b5061084760048036038101906108429190613850565b611c41565b005b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806108bc57506108bb82611d03565b5b9050919050565b6060600080546108d290613dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546108fe90613dfc565b801561094b5780601f106109205761010080835404028352916020019161094b565b820191906000526020600020905b81548152906001019060200180831161092e57829003601f168201915b5050505050905090565b600061096082611de5565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006109a682610ea8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0d90613e9f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610a35611e30565b73ffffffffffffffffffffffffffffffffffffffff161480610a645750610a6381610a5e611e30565b611bad565b5b610aa3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9a90613f31565b60405180910390fd5b610aad8383611ea2565b505050565b6000600880549050905090565b610ad0610aca611e30565b82611f5b565b610b0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0690613fc3565b60405180910390fd5b610b1a838383611ff0565b505050565b6000610b2a83610f2e565b8210610b6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6290614055565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b60606010805480602002602001604051908101604052809291908181526020018280548015610c4857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610bfe575b5050505050905090565b610c5a6122e9565b8060138190555050565b610c6c6122e9565b600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610cf9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf0906140c1565b60405180910390fd5b6001600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506010819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610dd2838383604051806020016040528060008152506112bc565b505050565b6000610de1610ab2565b8210610e22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1990614153565b60405180910390fd5b60088281548110610e3657610e35614173565b5b90600052602060002001549050919050565b60135481565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600080610eb483612367565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1c906141ee565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9590614280565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610fed6122e9565b610ff760006123a4565b565b600c6020528060005260406000206000915054906101000a900460ff1681565b6010818154811061102957600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600d6020528060005260406000206000915054906101000a900460ff1681565b600e6020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020180546110f190613dfc565b80601f016020809104026020016040519081016040528092919081815260200182805461111d90613dfc565b801561116a5780601f1061113f5761010080835404028352916020019161116a565b820191906000526020600020905b81548152906001019060200180831161114d57829003601f168201915b50505050509080600301549080600401549080600501805461118b90613dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546111b790613dfc565b80156112045780601f106111d957610100808354040283529160200191611204565b820191906000526020600020905b8154815290600101906020018083116111e757829003601f168201915b5050505050908060060154905087565b60606001805461122390613dfc565b80601f016020809104026020016040519081016040528092919081815260200182805461124f90613dfc565b801561129c5780601f106112715761010080835404028352916020019161129c565b820191906000526020600020905b81548152906001019060200180831161127f57829003601f168201915b5050505050905090565b6112b86112b1611e30565b838361246a565b5050565b6112cd6112c7611e30565b83611f5b565b61130c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130390613fc3565b60405180910390fd5b611318848484846125d6565b50505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113a057601354341015611398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138f90614312565b60405180910390fd5b3490506116e3565b600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661142c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114239061437e565b60405180910390fd5b60008290506000600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16600a61148c9190614500565b601354611499919061454b565b905060008273ffffffffffffffffffffffffffffffffffffffff166370a082316114c1611e30565b6040518263ffffffff1660e01b81526004016114dd919061366c565b602060405180830381865afa1580156114fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151e91906145a2565b905081811015611563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155a90614641565b60405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161159e919061366c565b602060405180830381865afa1580156115bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115df91906145a2565b90506116156115ec611e30565b30858773ffffffffffffffffffffffffffffffffffffffff16612632909392919063ffffffff16565b82816116219190614661565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161165a919061366c565b602060405180830381865afa158015611677573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169b91906145a2565b146116db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d2906146e1565b60405180910390fd5b829450505050505b6116f86116ee611e30565b84600001516126bb565b82600e6000856000015181526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201908161177691906148ad565b50606082015181600301556080820151816004015560a08201518160050190816117a091906148ad565b5060c08201518160060155905050505050565b600f60205280600052604060002060009150905080546117d290613dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546117fe90613dfc565b801561184b5780601f106118205761010080835404028352916020019161184b565b820191906000526020600020905b81548152906001019060200180831161182e57829003601f168201915b505050505081565b606061185e82611de5565b60006118686128d8565b9050600081511161188857604051806020016040528060008152506118b3565b80611892846128ef565b6040516020016118a39291906149bb565b6040516020818303038152906040525b915050919050565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6118ed6122e9565b600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611979576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161197090614a2b565b60405180910390fd5b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b601080549050811015611b5d578173ffffffffffffffffffffffffffffffffffffffff1660108281548110611a0c57611a0b614173565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611b4a5760106001601080549050611a669190614a4b565b81548110611a7757611a76614173565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660108281548110611ab657611ab5614173565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506010805480611b1057611b0f614a7f565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055611b5d565b8080611b5590614aae565b9150506119d4565b5050565b611b696122e9565b80601260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c496122e9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611cb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611caf90614b68565b60405180910390fd5b611cc1816123a4565b50565b60006014600036905010158015611ce05750611cdf33610e4e565b5b15611cf457601436033560601c9050611cf8565b3390505b90565b600033905090565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611dce57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611dde5750611ddd826129bd565b5b9050919050565b611dee81612a27565b611e2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e24906141ee565b60405180910390fd5b50565b60008073ffffffffffffffffffffffffffffffffffffffff16601260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e9457611e8f611cc4565b611e9d565b611e9c611cfb565b5b905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611f1583610ea8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080611f6783610ea8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611fa95750611fa88185611bad565b5b80611fe757508373ffffffffffffffffffffffffffffffffffffffff16611fcf84610955565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661201082610ea8565b73ffffffffffffffffffffffffffffffffffffffff1614612066576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161205d90614bfa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036120d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120cc90614c8c565b60405180910390fd5b6120e28383836001612a68565b8273ffffffffffffffffffffffffffffffffffffffff1661210282610ea8565b73ffffffffffffffffffffffffffffffffffffffff1614612158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161214f90614bfa565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46122e48383836001612bc6565b505050565b6122f1611e30565b73ffffffffffffffffffffffffffffffffffffffff1661230f611058565b73ffffffffffffffffffffffffffffffffffffffff1614612365576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161235c90614cf8565b60405180910390fd5b565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036124d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124cf90614d64565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516125c991906134fb565b60405180910390a3505050565b6125e1848484611ff0565b6125ed84848484612bcc565b61262c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161262390614df6565b60405180910390fd5b50505050565b6126b5846323b872dd60e01b85858560405160240161265393929190614e16565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612d53565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361272a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161272190614e99565b60405180910390fd5b61273381612a27565b15612773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161276a90614f05565b60405180910390fd5b612781600083836001612a68565b61278a81612a27565b156127ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127c190614f05565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46128d4600083836001612bc6565b5050565b606060405180602001604052806000815250905090565b6060600060016128fe84612e1b565b01905060008167ffffffffffffffff81111561291d5761291c6139c0565b5b6040519080825280601f01601f19166020018201604052801561294f5781602001600182028036833780820191505090505b509050600082602001820190505b6001156129b2578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816129a6576129a5614f25565b5b0494506000850361295d575b819350505050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16612a4983612367565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b612a7484848484612f6e565b6001811115612ab8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612aaf90614fc6565b60405180910390fd5b6000829050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603612aff57612afa81612f74565b612b3e565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614612b3d57612b3c8582612fbd565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603612b8057612b7b8161312a565b612bbf565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612bbe57612bbd84826131fb565b5b5b5050505050565b50505050565b6000612bed8473ffffffffffffffffffffffffffffffffffffffff1661327a565b15612d46578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612c16611e30565b8786866040518563ffffffff1660e01b8152600401612c38949392919061503b565b6020604051808303816000875af1925050508015612c7457506040513d601f19601f82011682018060405250810190612c71919061509c565b60015b612cf6573d8060008114612ca4576040519150601f19603f3d011682016040523d82523d6000602084013e612ca9565b606091505b506000815103612cee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ce590614df6565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612d4b565b600190505b949350505050565b6000612db5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661329d9092919063ffffffff16565b9050600081511480612dd7575080806020019051810190612dd691906150de565b5b612e16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e0d9061517d565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612e79577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612e6f57612e6e614f25565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612eb6576d04ee2d6d415b85acef81000000008381612eac57612eab614f25565b5b0492506020810190505b662386f26fc100008310612ee557662386f26fc100008381612edb57612eda614f25565b5b0492506010810190505b6305f5e1008310612f0e576305f5e1008381612f0457612f03614f25565b5b0492506008810190505b6127108310612f33576127108381612f2957612f28614f25565b5b0492506004810190505b60648310612f565760648381612f4c57612f4b614f25565b5b0492506002810190505b600a8310612f65576001810190505b80915050919050565b50505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001612fca84610f2e565b612fd49190614a4b565b90506000600760008481526020019081526020016000205490508181146130b9576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b6000600160088054905061313e9190614a4b565b905060006009600084815260200190815260200160002054905060006008838154811061316e5761316d614173565b5b9060005260206000200154905080600883815481106131905761318f614173565b5b9060005260206000200181905550816009600083815260200190815260200160002081905550600960008581526020019081526020016000206000905560088054806131df576131de614a7f565b5b6001900381819060005260206000200160009055905550505050565b600061320683610f2e565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60606132ac84846000856132b5565b90509392505050565b6060824710156132fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132f19061520f565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051613323919061526b565b60006040518083038185875af1925050503d8060008114613360576040519150601f19603f3d011682016040523d82523d6000602084013e613365565b606091505b509150915061337687838387613382565b92505050949350505050565b606083156133e45760008351036133dc5761339c8561327a565b6133db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016133d2906152ce565b60405180910390fd5b5b8290506133ef565b6133ee83836133f7565b5b949350505050565b60008251111561340a5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161343e91906135a6565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6134908161345b565b811461349b57600080fd5b50565b6000813590506134ad81613487565b92915050565b6000602082840312156134c9576134c8613451565b5b60006134d78482850161349e565b91505092915050565b60008115159050919050565b6134f5816134e0565b82525050565b600060208201905061351060008301846134ec565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613550578082015181840152602081019050613535565b60008484015250505050565b6000601f19601f8301169050919050565b600061357882613516565b6135828185613521565b9350613592818560208601613532565b61359b8161355c565b840191505092915050565b600060208201905081810360008301526135c0818461356d565b905092915050565b6000819050919050565b6135db816135c8565b81146135e657600080fd5b50565b6000813590506135f8816135d2565b92915050565b60006020828403121561361457613613613451565b5b6000613622848285016135e9565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006136568261362b565b9050919050565b6136668161364b565b82525050565b6000602082019050613681600083018461365d565b92915050565b6136908161364b565b811461369b57600080fd5b50565b6000813590506136ad81613687565b92915050565b600080604083850312156136ca576136c9613451565b5b60006136d88582860161369e565b92505060206136e9858286016135e9565b9150509250929050565b6136fc816135c8565b82525050565b600060208201905061371760008301846136f3565b92915050565b60008060006060848603121561373657613735613451565b5b60006137448682870161369e565b93505060206137558682870161369e565b9250506040613766868287016135e9565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6137a58161364b565b82525050565b60006137b7838361379c565b60208301905092915050565b6000602082019050919050565b60006137db82613770565b6137e5818561377b565b93506137f08361378c565b8060005b8381101561382157815161380888826137ab565b9750613813836137c3565b9250506001810190506137f4565b5085935050505092915050565b6000602082019050818103600083015261384881846137d0565b905092915050565b60006020828403121561386657613865613451565b5b60006138748482850161369e565b91505092915050565b600060ff82169050919050565b6138938161387d565b82525050565b60006020820190506138ae600083018461388a565b92915050565b6000819050919050565b6138c7816138b4565b82525050565b600060e0820190506138e2600083018a6136f3565b6138ef602083018961365d565b8181036040830152613901818861356d565b905061391060608301876138be565b61391d60808301866138be565b81810360a083015261392f818561356d565b905061393e60c08301846136f3565b98975050505050505050565b613953816134e0565b811461395e57600080fd5b50565b6000813590506139708161394a565b92915050565b6000806040838503121561398d5761398c613451565b5b600061399b8582860161369e565b92505060206139ac85828601613961565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6139f88261355c565b810181811067ffffffffffffffff82111715613a1757613a166139c0565b5b80604052505050565b6000613a2a613447565b9050613a3682826139ef565b919050565b600067ffffffffffffffff821115613a5657613a556139c0565b5b613a5f8261355c565b9050602081019050919050565b82818337600083830152505050565b6000613a8e613a8984613a3b565b613a20565b905082815260208101848484011115613aaa57613aa96139bb565b5b613ab5848285613a6c565b509392505050565b600082601f830112613ad257613ad16139b6565b5b8135613ae2848260208601613a7b565b91505092915050565b60008060008060808587031215613b0557613b04613451565b5b6000613b138782880161369e565b9450506020613b248782880161369e565b9350506040613b35878288016135e9565b925050606085013567ffffffffffffffff811115613b5657613b55613456565b5b613b6287828801613abd565b91505092959194509250565b600080fd5b600080fd5b600067ffffffffffffffff821115613b9357613b926139c0565b5b613b9c8261355c565b9050602081019050919050565b6000613bbc613bb784613b78565b613a20565b905082815260208101848484011115613bd857613bd76139bb565b5b613be3848285613a6c565b509392505050565b600082601f830112613c0057613bff6139b6565b5b8135613c10848260208601613ba9565b91505092915050565b613c22816138b4565b8114613c2d57600080fd5b50565b600081359050613c3f81613c19565b92915050565b600060e08284031215613c5b57613c5a613b6e565b5b613c6560e0613a20565b90506000613c75848285016135e9565b6000830152506020613c898482850161369e565b602083015250604082013567ffffffffffffffff811115613cad57613cac613b73565b5b613cb984828501613beb565b6040830152506060613ccd84828501613c30565b6060830152506080613ce184828501613c30565b60808301525060a082013567ffffffffffffffff811115613d0557613d04613b73565b5b613d1184828501613beb565b60a08301525060c0613d25848285016135e9565b60c08301525092915050565b60008060408385031215613d4857613d47613451565b5b600083013567ffffffffffffffff811115613d6657613d65613456565b5b613d7285828601613c45565b9250506020613d838582860161369e565b9150509250929050565b60008060408385031215613da457613da3613451565b5b6000613db28582860161369e565b9250506020613dc38582860161369e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613e1457607f821691505b602082108103613e2757613e26613dcd565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000613e89602183613521565b9150613e9482613e2d565b604082019050919050565b60006020820190508181036000830152613eb881613e7c565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000613f1b603d83613521565b9150613f2682613ebf565b604082019050919050565b60006020820190508181036000830152613f4a81613f0e565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000613fad602d83613521565b9150613fb882613f51565b604082019050919050565b60006020820190508181036000830152613fdc81613fa0565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b600061403f602b83613521565b915061404a82613fe3565b604082019050919050565b6000602082019050818103600083015261406e81614032565b9050919050565b7f546f6b656e20697320616c726561647920616363657074656400000000000000600082015250565b60006140ab601983613521565b91506140b682614075565b602082019050919050565b600060208201905081810360008301526140da8161409e565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b600061413d602c83613521565b9150614148826140e1565b604082019050919050565b6000602082019050818103600083015261416c81614130565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006141d8601883613521565b91506141e3826141a2565b602082019050919050565b60006020820190508181036000830152614207816141cb565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061426a602983613521565b91506142758261420e565b604082019050919050565b600060208201905081810360008301526142998161425d565b9050919050565b7f4e6f7420656e6f7567682045746865722073656e7420666f722072656769737460008201527f726174696f6e2066656500000000000000000000000000000000000000000000602082015250565b60006142fc602a83613521565b9150614307826142a0565b604082019050919050565b6000602082019050818103600083015261432b816142ef565b9050919050565b7f556e737570706f7274656420746f6b656e000000000000000000000000000000600082015250565b6000614368601183613521565b915061437382614332565b602082019050919050565b600060208201905081810360008301526143978161435b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561442457808604811115614400576143ff61439e565b5b600185161561440f5780820291505b808102905061441d856143cd565b94506143e4565b94509492505050565b60008261443d57600190506144f9565b8161444b57600090506144f9565b8160018114614461576002811461446b5761449a565b60019150506144f9565b60ff84111561447d5761447c61439e565b5b8360020a9150848211156144945761449361439e565b5b506144f9565b5060208310610133831016604e8410600b84101617156144cf5782820a9050838111156144ca576144c961439e565b5b6144f9565b6144dc84848460016143da565b925090508184048111156144f3576144f261439e565b5b81810290505b9392505050565b600061450b826135c8565b91506145168361387d565b92506145437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461442d565b905092915050565b6000614556826135c8565b9150614561836135c8565b925082820261456f816135c8565b915082820484148315176145865761458561439e565b5b5092915050565b60008151905061459c816135d2565b92915050565b6000602082840312156145b8576145b7613451565b5b60006145c68482850161458d565b91505092915050565b7f4e6f7420656e6f75676820746f6b656e7320666f72207265676973747261746960008201527f6f6e206665650000000000000000000000000000000000000000000000000000602082015250565b600061462b602683613521565b9150614636826145cf565b604082019050919050565b6000602082019050818103600083015261465a8161461e565b9050919050565b600061466c826135c8565b9150614677836135c8565b925082820190508082111561468f5761468e61439e565b5b92915050565b7f546f6b656e207472616e73666572206661696c65640000000000000000000000600082015250565b60006146cb601583613521565b91506146d682614695565b602082019050919050565b600060208201905081810360008301526146fa816146be565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026147637fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614726565b61476d8683614726565b95508019841693508086168417925050509392505050565b6000819050919050565b60006147aa6147a56147a0846135c8565b614785565b6135c8565b9050919050565b6000819050919050565b6147c48361478f565b6147d86147d0826147b1565b848454614733565b825550505050565b600090565b6147ed6147e0565b6147f88184846147bb565b505050565b5b8181101561481c576148116000826147e5565b6001810190506147fe565b5050565b601f8211156148615761483281614701565b61483b84614716565b8101602085101561484a578190505b61485e61485685614716565b8301826147fd565b50505b505050565b600082821c905092915050565b600061488460001984600802614866565b1980831691505092915050565b600061489d8383614873565b9150826002028217905092915050565b6148b682613516565b67ffffffffffffffff8111156148cf576148ce6139c0565b5b6148d98254613dfc565b6148e4828285614820565b600060209050601f8311600181146149175760008415614905578287015190505b61490f8582614891565b865550614977565b601f19841661492586614701565b60005b8281101561494d57848901518255600182019150602085019450602081019050614928565b8683101561496a5784890151614966601f891682614873565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b600061499582613516565b61499f818561497f565b93506149af818560208601613532565b80840191505092915050565b60006149c7828561498a565b91506149d3828461498a565b91508190509392505050565b7f546f6b656e206973206e6f742061636365707465640000000000000000000000600082015250565b6000614a15601583613521565b9150614a20826149df565b602082019050919050565b60006020820190508181036000830152614a4481614a08565b9050919050565b6000614a56826135c8565b9150614a61836135c8565b9250828203905081811115614a7957614a7861439e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000614ab9826135c8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614aeb57614aea61439e565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000614b52602683613521565b9150614b5d82614af6565b604082019050919050565b60006020820190508181036000830152614b8181614b45565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000614be4602583613521565b9150614bef82614b88565b604082019050919050565b60006020820190508181036000830152614c1381614bd7565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000614c76602483613521565b9150614c8182614c1a565b604082019050919050565b60006020820190508181036000830152614ca581614c69565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000614ce2602083613521565b9150614ced82614cac565b602082019050919050565b60006020820190508181036000830152614d1181614cd5565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000614d4e601983613521565b9150614d5982614d18565b602082019050919050565b60006020820190508181036000830152614d7d81614d41565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000614de0603283613521565b9150614deb82614d84565b604082019050919050565b60006020820190508181036000830152614e0f81614dd3565b9050919050565b6000606082019050614e2b600083018661365d565b614e38602083018561365d565b614e4560408301846136f3565b949350505050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000614e83602083613521565b9150614e8e82614e4d565b602082019050919050565b60006020820190508181036000830152614eb281614e76565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000614eef601c83613521565b9150614efa82614eb9565b602082019050919050565b60006020820190508181036000830152614f1e81614ee2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f455243373231456e756d657261626c653a20636f6e736563757469766520747260008201527f616e7366657273206e6f7420737570706f727465640000000000000000000000602082015250565b6000614fb0603583613521565b9150614fbb82614f54565b604082019050919050565b60006020820190508181036000830152614fdf81614fa3565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061500d82614fe6565b6150178185614ff1565b9350615027818560208601613532565b6150308161355c565b840191505092915050565b6000608082019050615050600083018761365d565b61505d602083018661365d565b61506a60408301856136f3565b818103606083015261507c8184615002565b905095945050505050565b60008151905061509681613487565b92915050565b6000602082840312156150b2576150b1613451565b5b60006150c084828501615087565b91505092915050565b6000815190506150d88161394a565b92915050565b6000602082840312156150f4576150f3613451565b5b6000615102848285016150c9565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000615167602a83613521565b91506151728261510b565b604082019050919050565b600060208201905081810360008301526151968161515a565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006151f9602683613521565b91506152048261519d565b604082019050919050565b60006020820190508181036000830152615228816151ec565b9050919050565b600081905092915050565b600061524582614fe6565b61524f818561522f565b935061525f818560208601613532565b80840191505092915050565b6000615277828461523a565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006152b8601d83613521565b91506152c382615282565b602082019050919050565b600060208201905081810360008301526152e7816152ab565b905091905056fea2646970667358221220d230197a8b5ea240fcad30b8fa01b2dd190942a04fda3f73ed4534887474963464736f6c63430008120033",
    deployedBytecode:
      "0x6080604052600436106101ee5760003560e01c8063715018a61161010d578063b88d4fde116100a0578063ce1b815f1161006f578063ce1b815f14610766578063d8134a2314610791578063da742228146107ba578063e985e9c5146107e3578063f2fde38b14610820576101ee565b8063b88d4fde146106a7578063bdac5fe9146106d0578063c6cdbe5e146106ec578063c87b56dd14610729576101ee565b80638ee573ac116100dc5780638ee573ac146105d357806392c8823b1461061057806395d89b4114610653578063a22cb4651461067e576101ee565b8063715018a61461051757806382dc4a051461052e5780638912fbfb1461056b5780638da5cb5b146105a8576101ee565b8063310d8c5611610185578063514c612b11610154578063514c612b14610435578063572b6c05146104605780636352211e1461049d57806370a08231146104da576101ee565b8063310d8c561461037d5780633eee83f1146103a657806342842e0e146103cf5780634f6ccce7146103f8576101ee565b806318160ddd116101c157806318160ddd146102c157806323b872dd146102ec5780632f745c59146103155780632f75700614610352576101ee565b806301ffc9a7146101f357806306fdde0314610230578063081812fc1461025b578063095ea7b314610298575b600080fd5b3480156101ff57600080fd5b5061021a600480360381019061021591906134b3565b610849565b60405161022791906134fb565b60405180910390f35b34801561023c57600080fd5b506102456108c3565b60405161025291906135a6565b60405180910390f35b34801561026757600080fd5b50610282600480360381019061027d91906135fe565b610955565b60405161028f919061366c565b60405180910390f35b3480156102a457600080fd5b506102bf60048036038101906102ba91906136b3565b61099b565b005b3480156102cd57600080fd5b506102d6610ab2565b6040516102e39190613702565b60405180910390f35b3480156102f857600080fd5b50610313600480360381019061030e919061371d565b610abf565b005b34801561032157600080fd5b5061033c600480360381019061033791906136b3565b610b1f565b6040516103499190613702565b60405180910390f35b34801561035e57600080fd5b50610367610bc4565b604051610374919061382e565b60405180910390f35b34801561038957600080fd5b506103a4600480360381019061039f91906135fe565b610c52565b005b3480156103b257600080fd5b506103cd60048036038101906103c89190613850565b610c64565b005b3480156103db57600080fd5b506103f660048036038101906103f1919061371d565b610db7565b005b34801561040457600080fd5b5061041f600480360381019061041a91906135fe565b610dd7565b60405161042c9190613702565b60405180910390f35b34801561044157600080fd5b5061044a610e48565b6040516104579190613702565b60405180910390f35b34801561046c57600080fd5b5061048760048036038101906104829190613850565b610e4e565b60405161049491906134fb565b60405180910390f35b3480156104a957600080fd5b506104c460048036038101906104bf91906135fe565b610ea8565b6040516104d1919061366c565b60405180910390f35b3480156104e657600080fd5b5061050160048036038101906104fc9190613850565b610f2e565b60405161050e9190613702565b60405180910390f35b34801561052357600080fd5b5061052c610fe5565b005b34801561053a57600080fd5b5061055560048036038101906105509190613850565b610ff9565b60405161056291906134fb565b60405180910390f35b34801561057757600080fd5b50610592600480360381019061058d91906135fe565b611019565b60405161059f919061366c565b60405180910390f35b3480156105b457600080fd5b506105bd611058565b6040516105ca919061366c565b60405180910390f35b3480156105df57600080fd5b506105fa60048036038101906105f59190613850565b611082565b6040516106079190613899565b60405180910390f35b34801561061c57600080fd5b50610637600480360381019061063291906135fe565b6110a2565b60405161064a97969594939291906138cd565b60405180910390f35b34801561065f57600080fd5b50610668611214565b60405161067591906135a6565b60405180910390f35b34801561068a57600080fd5b506106a560048036038101906106a09190613976565b6112a6565b005b3480156106b357600080fd5b506106ce60048036038101906106c99190613aeb565b6112bc565b005b6106ea60048036038101906106e59190613d31565b61131e565b005b3480156106f857600080fd5b50610713600480360381019061070e91906135fe565b6117b3565b60405161072091906135a6565b60405180910390f35b34801561073557600080fd5b50610750600480360381019061074b91906135fe565b611853565b60405161075d91906135a6565b60405180910390f35b34801561077257600080fd5b5061077b6118bb565b604051610788919061366c565b60405180910390f35b34801561079d57600080fd5b506107b860048036038101906107b39190613850565b6118e5565b005b3480156107c657600080fd5b506107e160048036038101906107dc9190613850565b611b61565b005b3480156107ef57600080fd5b5061080a60048036038101906108059190613d8d565b611bad565b60405161081791906134fb565b60405180910390f35b34801561082c57600080fd5b5061084760048036038101906108429190613850565b611c41565b005b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806108bc57506108bb82611d03565b5b9050919050565b6060600080546108d290613dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546108fe90613dfc565b801561094b5780601f106109205761010080835404028352916020019161094b565b820191906000526020600020905b81548152906001019060200180831161092e57829003601f168201915b5050505050905090565b600061096082611de5565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006109a682610ea8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0d90613e9f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610a35611e30565b73ffffffffffffffffffffffffffffffffffffffff161480610a645750610a6381610a5e611e30565b611bad565b5b610aa3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9a90613f31565b60405180910390fd5b610aad8383611ea2565b505050565b6000600880549050905090565b610ad0610aca611e30565b82611f5b565b610b0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0690613fc3565b60405180910390fd5b610b1a838383611ff0565b505050565b6000610b2a83610f2e565b8210610b6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6290614055565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b60606010805480602002602001604051908101604052809291908181526020018280548015610c4857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610bfe575b5050505050905090565b610c5a6122e9565b8060138190555050565b610c6c6122e9565b600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610cf9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf0906140c1565b60405180910390fd5b6001600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506010819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610dd2838383604051806020016040528060008152506112bc565b505050565b6000610de1610ab2565b8210610e22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1990614153565b60405180910390fd5b60088281548110610e3657610e35614173565b5b90600052602060002001549050919050565b60135481565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600080610eb483612367565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1c906141ee565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9590614280565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610fed6122e9565b610ff760006123a4565b565b600c6020528060005260406000206000915054906101000a900460ff1681565b6010818154811061102957600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600d6020528060005260406000206000915054906101000a900460ff1681565b600e6020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020180546110f190613dfc565b80601f016020809104026020016040519081016040528092919081815260200182805461111d90613dfc565b801561116a5780601f1061113f5761010080835404028352916020019161116a565b820191906000526020600020905b81548152906001019060200180831161114d57829003601f168201915b50505050509080600301549080600401549080600501805461118b90613dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546111b790613dfc565b80156112045780601f106111d957610100808354040283529160200191611204565b820191906000526020600020905b8154815290600101906020018083116111e757829003601f168201915b5050505050908060060154905087565b60606001805461122390613dfc565b80601f016020809104026020016040519081016040528092919081815260200182805461124f90613dfc565b801561129c5780601f106112715761010080835404028352916020019161129c565b820191906000526020600020905b81548152906001019060200180831161127f57829003601f168201915b5050505050905090565b6112b86112b1611e30565b838361246a565b5050565b6112cd6112c7611e30565b83611f5b565b61130c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130390613fc3565b60405180910390fd5b611318848484846125d6565b50505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113a057601354341015611398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138f90614312565b60405180910390fd5b3490506116e3565b600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661142c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114239061437e565b60405180910390fd5b60008290506000600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16600a61148c9190614500565b601354611499919061454b565b905060008273ffffffffffffffffffffffffffffffffffffffff166370a082316114c1611e30565b6040518263ffffffff1660e01b81526004016114dd919061366c565b602060405180830381865afa1580156114fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151e91906145a2565b905081811015611563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155a90614641565b60405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161159e919061366c565b602060405180830381865afa1580156115bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115df91906145a2565b90506116156115ec611e30565b30858773ffffffffffffffffffffffffffffffffffffffff16612632909392919063ffffffff16565b82816116219190614661565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161165a919061366c565b602060405180830381865afa158015611677573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169b91906145a2565b146116db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d2906146e1565b60405180910390fd5b829450505050505b6116f86116ee611e30565b84600001516126bb565b82600e6000856000015181526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201908161177691906148ad565b50606082015181600301556080820151816004015560a08201518160050190816117a091906148ad565b5060c08201518160060155905050505050565b600f60205280600052604060002060009150905080546117d290613dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546117fe90613dfc565b801561184b5780601f106118205761010080835404028352916020019161184b565b820191906000526020600020905b81548152906001019060200180831161182e57829003601f168201915b505050505081565b606061185e82611de5565b60006118686128d8565b9050600081511161188857604051806020016040528060008152506118b3565b80611892846128ef565b6040516020016118a39291906149bb565b6040516020818303038152906040525b915050919050565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6118ed6122e9565b600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611979576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161197090614a2b565b60405180910390fd5b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b601080549050811015611b5d578173ffffffffffffffffffffffffffffffffffffffff1660108281548110611a0c57611a0b614173565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611b4a5760106001601080549050611a669190614a4b565b81548110611a7757611a76614173565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660108281548110611ab657611ab5614173565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506010805480611b1057611b0f614a7f565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055611b5d565b8080611b5590614aae565b9150506119d4565b5050565b611b696122e9565b80601260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c496122e9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611cb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611caf90614b68565b60405180910390fd5b611cc1816123a4565b50565b60006014600036905010158015611ce05750611cdf33610e4e565b5b15611cf457601436033560601c9050611cf8565b3390505b90565b600033905090565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611dce57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611dde5750611ddd826129bd565b5b9050919050565b611dee81612a27565b611e2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e24906141ee565b60405180910390fd5b50565b60008073ffffffffffffffffffffffffffffffffffffffff16601260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e9457611e8f611cc4565b611e9d565b611e9c611cfb565b5b905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611f1583610ea8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080611f6783610ea8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611fa95750611fa88185611bad565b5b80611fe757508373ffffffffffffffffffffffffffffffffffffffff16611fcf84610955565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661201082610ea8565b73ffffffffffffffffffffffffffffffffffffffff1614612066576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161205d90614bfa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036120d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120cc90614c8c565b60405180910390fd5b6120e28383836001612a68565b8273ffffffffffffffffffffffffffffffffffffffff1661210282610ea8565b73ffffffffffffffffffffffffffffffffffffffff1614612158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161214f90614bfa565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46122e48383836001612bc6565b505050565b6122f1611e30565b73ffffffffffffffffffffffffffffffffffffffff1661230f611058565b73ffffffffffffffffffffffffffffffffffffffff1614612365576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161235c90614cf8565b60405180910390fd5b565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036124d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124cf90614d64565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516125c991906134fb565b60405180910390a3505050565b6125e1848484611ff0565b6125ed84848484612bcc565b61262c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161262390614df6565b60405180910390fd5b50505050565b6126b5846323b872dd60e01b85858560405160240161265393929190614e16565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612d53565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361272a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161272190614e99565b60405180910390fd5b61273381612a27565b15612773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161276a90614f05565b60405180910390fd5b612781600083836001612a68565b61278a81612a27565b156127ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127c190614f05565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46128d4600083836001612bc6565b5050565b606060405180602001604052806000815250905090565b6060600060016128fe84612e1b565b01905060008167ffffffffffffffff81111561291d5761291c6139c0565b5b6040519080825280601f01601f19166020018201604052801561294f5781602001600182028036833780820191505090505b509050600082602001820190505b6001156129b2578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816129a6576129a5614f25565b5b0494506000850361295d575b819350505050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16612a4983612367565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b612a7484848484612f6e565b6001811115612ab8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612aaf90614fc6565b60405180910390fd5b6000829050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603612aff57612afa81612f74565b612b3e565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614612b3d57612b3c8582612fbd565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603612b8057612b7b8161312a565b612bbf565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612bbe57612bbd84826131fb565b5b5b5050505050565b50505050565b6000612bed8473ffffffffffffffffffffffffffffffffffffffff1661327a565b15612d46578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612c16611e30565b8786866040518563ffffffff1660e01b8152600401612c38949392919061503b565b6020604051808303816000875af1925050508015612c7457506040513d601f19601f82011682018060405250810190612c71919061509c565b60015b612cf6573d8060008114612ca4576040519150601f19603f3d011682016040523d82523d6000602084013e612ca9565b606091505b506000815103612cee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ce590614df6565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612d4b565b600190505b949350505050565b6000612db5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661329d9092919063ffffffff16565b9050600081511480612dd7575080806020019051810190612dd691906150de565b5b612e16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e0d9061517d565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612e79577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612e6f57612e6e614f25565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612eb6576d04ee2d6d415b85acef81000000008381612eac57612eab614f25565b5b0492506020810190505b662386f26fc100008310612ee557662386f26fc100008381612edb57612eda614f25565b5b0492506010810190505b6305f5e1008310612f0e576305f5e1008381612f0457612f03614f25565b5b0492506008810190505b6127108310612f33576127108381612f2957612f28614f25565b5b0492506004810190505b60648310612f565760648381612f4c57612f4b614f25565b5b0492506002810190505b600a8310612f65576001810190505b80915050919050565b50505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001612fca84610f2e565b612fd49190614a4b565b90506000600760008481526020019081526020016000205490508181146130b9576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b6000600160088054905061313e9190614a4b565b905060006009600084815260200190815260200160002054905060006008838154811061316e5761316d614173565b5b9060005260206000200154905080600883815481106131905761318f614173565b5b9060005260206000200181905550816009600083815260200190815260200160002081905550600960008581526020019081526020016000206000905560088054806131df576131de614a7f565b5b6001900381819060005260206000200160009055905550505050565b600061320683610f2e565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60606132ac84846000856132b5565b90509392505050565b6060824710156132fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132f19061520f565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051613323919061526b565b60006040518083038185875af1925050503d8060008114613360576040519150601f19603f3d011682016040523d82523d6000602084013e613365565b606091505b509150915061337687838387613382565b92505050949350505050565b606083156133e45760008351036133dc5761339c8561327a565b6133db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016133d2906152ce565b60405180910390fd5b5b8290506133ef565b6133ee83836133f7565b5b949350505050565b60008251111561340a5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161343e91906135a6565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6134908161345b565b811461349b57600080fd5b50565b6000813590506134ad81613487565b92915050565b6000602082840312156134c9576134c8613451565b5b60006134d78482850161349e565b91505092915050565b60008115159050919050565b6134f5816134e0565b82525050565b600060208201905061351060008301846134ec565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613550578082015181840152602081019050613535565b60008484015250505050565b6000601f19601f8301169050919050565b600061357882613516565b6135828185613521565b9350613592818560208601613532565b61359b8161355c565b840191505092915050565b600060208201905081810360008301526135c0818461356d565b905092915050565b6000819050919050565b6135db816135c8565b81146135e657600080fd5b50565b6000813590506135f8816135d2565b92915050565b60006020828403121561361457613613613451565b5b6000613622848285016135e9565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006136568261362b565b9050919050565b6136668161364b565b82525050565b6000602082019050613681600083018461365d565b92915050565b6136908161364b565b811461369b57600080fd5b50565b6000813590506136ad81613687565b92915050565b600080604083850312156136ca576136c9613451565b5b60006136d88582860161369e565b92505060206136e9858286016135e9565b9150509250929050565b6136fc816135c8565b82525050565b600060208201905061371760008301846136f3565b92915050565b60008060006060848603121561373657613735613451565b5b60006137448682870161369e565b93505060206137558682870161369e565b9250506040613766868287016135e9565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6137a58161364b565b82525050565b60006137b7838361379c565b60208301905092915050565b6000602082019050919050565b60006137db82613770565b6137e5818561377b565b93506137f08361378c565b8060005b8381101561382157815161380888826137ab565b9750613813836137c3565b9250506001810190506137f4565b5085935050505092915050565b6000602082019050818103600083015261384881846137d0565b905092915050565b60006020828403121561386657613865613451565b5b60006138748482850161369e565b91505092915050565b600060ff82169050919050565b6138938161387d565b82525050565b60006020820190506138ae600083018461388a565b92915050565b6000819050919050565b6138c7816138b4565b82525050565b600060e0820190506138e2600083018a6136f3565b6138ef602083018961365d565b8181036040830152613901818861356d565b905061391060608301876138be565b61391d60808301866138be565b81810360a083015261392f818561356d565b905061393e60c08301846136f3565b98975050505050505050565b613953816134e0565b811461395e57600080fd5b50565b6000813590506139708161394a565b92915050565b6000806040838503121561398d5761398c613451565b5b600061399b8582860161369e565b92505060206139ac85828601613961565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6139f88261355c565b810181811067ffffffffffffffff82111715613a1757613a166139c0565b5b80604052505050565b6000613a2a613447565b9050613a3682826139ef565b919050565b600067ffffffffffffffff821115613a5657613a556139c0565b5b613a5f8261355c565b9050602081019050919050565b82818337600083830152505050565b6000613a8e613a8984613a3b565b613a20565b905082815260208101848484011115613aaa57613aa96139bb565b5b613ab5848285613a6c565b509392505050565b600082601f830112613ad257613ad16139b6565b5b8135613ae2848260208601613a7b565b91505092915050565b60008060008060808587031215613b0557613b04613451565b5b6000613b138782880161369e565b9450506020613b248782880161369e565b9350506040613b35878288016135e9565b925050606085013567ffffffffffffffff811115613b5657613b55613456565b5b613b6287828801613abd565b91505092959194509250565b600080fd5b600080fd5b600067ffffffffffffffff821115613b9357613b926139c0565b5b613b9c8261355c565b9050602081019050919050565b6000613bbc613bb784613b78565b613a20565b905082815260208101848484011115613bd857613bd76139bb565b5b613be3848285613a6c565b509392505050565b600082601f830112613c0057613bff6139b6565b5b8135613c10848260208601613ba9565b91505092915050565b613c22816138b4565b8114613c2d57600080fd5b50565b600081359050613c3f81613c19565b92915050565b600060e08284031215613c5b57613c5a613b6e565b5b613c6560e0613a20565b90506000613c75848285016135e9565b6000830152506020613c898482850161369e565b602083015250604082013567ffffffffffffffff811115613cad57613cac613b73565b5b613cb984828501613beb565b6040830152506060613ccd84828501613c30565b6060830152506080613ce184828501613c30565b60808301525060a082013567ffffffffffffffff811115613d0557613d04613b73565b5b613d1184828501613beb565b60a08301525060c0613d25848285016135e9565b60c08301525092915050565b60008060408385031215613d4857613d47613451565b5b600083013567ffffffffffffffff811115613d6657613d65613456565b5b613d7285828601613c45565b9250506020613d838582860161369e565b9150509250929050565b60008060408385031215613da457613da3613451565b5b6000613db28582860161369e565b9250506020613dc38582860161369e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613e1457607f821691505b602082108103613e2757613e26613dcd565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000613e89602183613521565b9150613e9482613e2d565b604082019050919050565b60006020820190508181036000830152613eb881613e7c565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000613f1b603d83613521565b9150613f2682613ebf565b604082019050919050565b60006020820190508181036000830152613f4a81613f0e565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000613fad602d83613521565b9150613fb882613f51565b604082019050919050565b60006020820190508181036000830152613fdc81613fa0565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b600061403f602b83613521565b915061404a82613fe3565b604082019050919050565b6000602082019050818103600083015261406e81614032565b9050919050565b7f546f6b656e20697320616c726561647920616363657074656400000000000000600082015250565b60006140ab601983613521565b91506140b682614075565b602082019050919050565b600060208201905081810360008301526140da8161409e565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b600061413d602c83613521565b9150614148826140e1565b604082019050919050565b6000602082019050818103600083015261416c81614130565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006141d8601883613521565b91506141e3826141a2565b602082019050919050565b60006020820190508181036000830152614207816141cb565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061426a602983613521565b91506142758261420e565b604082019050919050565b600060208201905081810360008301526142998161425d565b9050919050565b7f4e6f7420656e6f7567682045746865722073656e7420666f722072656769737460008201527f726174696f6e2066656500000000000000000000000000000000000000000000602082015250565b60006142fc602a83613521565b9150614307826142a0565b604082019050919050565b6000602082019050818103600083015261432b816142ef565b9050919050565b7f556e737570706f7274656420746f6b656e000000000000000000000000000000600082015250565b6000614368601183613521565b915061437382614332565b602082019050919050565b600060208201905081810360008301526143978161435b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561442457808604811115614400576143ff61439e565b5b600185161561440f5780820291505b808102905061441d856143cd565b94506143e4565b94509492505050565b60008261443d57600190506144f9565b8161444b57600090506144f9565b8160018114614461576002811461446b5761449a565b60019150506144f9565b60ff84111561447d5761447c61439e565b5b8360020a9150848211156144945761449361439e565b5b506144f9565b5060208310610133831016604e8410600b84101617156144cf5782820a9050838111156144ca576144c961439e565b5b6144f9565b6144dc84848460016143da565b925090508184048111156144f3576144f261439e565b5b81810290505b9392505050565b600061450b826135c8565b91506145168361387d565b92506145437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461442d565b905092915050565b6000614556826135c8565b9150614561836135c8565b925082820261456f816135c8565b915082820484148315176145865761458561439e565b5b5092915050565b60008151905061459c816135d2565b92915050565b6000602082840312156145b8576145b7613451565b5b60006145c68482850161458d565b91505092915050565b7f4e6f7420656e6f75676820746f6b656e7320666f72207265676973747261746960008201527f6f6e206665650000000000000000000000000000000000000000000000000000602082015250565b600061462b602683613521565b9150614636826145cf565b604082019050919050565b6000602082019050818103600083015261465a8161461e565b9050919050565b600061466c826135c8565b9150614677836135c8565b925082820190508082111561468f5761468e61439e565b5b92915050565b7f546f6b656e207472616e73666572206661696c65640000000000000000000000600082015250565b60006146cb601583613521565b91506146d682614695565b602082019050919050565b600060208201905081810360008301526146fa816146be565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026147637fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614726565b61476d8683614726565b95508019841693508086168417925050509392505050565b6000819050919050565b60006147aa6147a56147a0846135c8565b614785565b6135c8565b9050919050565b6000819050919050565b6147c48361478f565b6147d86147d0826147b1565b848454614733565b825550505050565b600090565b6147ed6147e0565b6147f88184846147bb565b505050565b5b8181101561481c576148116000826147e5565b6001810190506147fe565b5050565b601f8211156148615761483281614701565b61483b84614716565b8101602085101561484a578190505b61485e61485685614716565b8301826147fd565b50505b505050565b600082821c905092915050565b600061488460001984600802614866565b1980831691505092915050565b600061489d8383614873565b9150826002028217905092915050565b6148b682613516565b67ffffffffffffffff8111156148cf576148ce6139c0565b5b6148d98254613dfc565b6148e4828285614820565b600060209050601f8311600181146149175760008415614905578287015190505b61490f8582614891565b865550614977565b601f19841661492586614701565b60005b8281101561494d57848901518255600182019150602085019450602081019050614928565b8683101561496a5784890151614966601f891682614873565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b600061499582613516565b61499f818561497f565b93506149af818560208601613532565b80840191505092915050565b60006149c7828561498a565b91506149d3828461498a565b91508190509392505050565b7f546f6b656e206973206e6f742061636365707465640000000000000000000000600082015250565b6000614a15601583613521565b9150614a20826149df565b602082019050919050565b60006020820190508181036000830152614a4481614a08565b9050919050565b6000614a56826135c8565b9150614a61836135c8565b9250828203905081811115614a7957614a7861439e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000614ab9826135c8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614aeb57614aea61439e565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000614b52602683613521565b9150614b5d82614af6565b604082019050919050565b60006020820190508181036000830152614b8181614b45565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000614be4602583613521565b9150614bef82614b88565b604082019050919050565b60006020820190508181036000830152614c1381614bd7565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000614c76602483613521565b9150614c8182614c1a565b604082019050919050565b60006020820190508181036000830152614ca581614c69565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000614ce2602083613521565b9150614ced82614cac565b602082019050919050565b60006020820190508181036000830152614d1181614cd5565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000614d4e601983613521565b9150614d5982614d18565b602082019050919050565b60006020820190508181036000830152614d7d81614d41565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000614de0603283613521565b9150614deb82614d84565b604082019050919050565b60006020820190508181036000830152614e0f81614dd3565b9050919050565b6000606082019050614e2b600083018661365d565b614e38602083018561365d565b614e4560408301846136f3565b949350505050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000614e83602083613521565b9150614e8e82614e4d565b602082019050919050565b60006020820190508181036000830152614eb281614e76565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000614eef601c83613521565b9150614efa82614eb9565b602082019050919050565b60006020820190508181036000830152614f1e81614ee2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f455243373231456e756d657261626c653a20636f6e736563757469766520747260008201527f616e7366657273206e6f7420737570706f727465640000000000000000000000602082015250565b6000614fb0603583613521565b9150614fbb82614f54565b604082019050919050565b60006020820190508181036000830152614fdf81614fa3565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061500d82614fe6565b6150178185614ff1565b9350615027818560208601613532565b6150308161355c565b840191505092915050565b6000608082019050615050600083018761365d565b61505d602083018661365d565b61506a60408301856136f3565b818103606083015261507c8184615002565b905095945050505050565b60008151905061509681613487565b92915050565b6000602082840312156150b2576150b1613451565b5b60006150c084828501615087565b91505092915050565b6000815190506150d88161394a565b92915050565b6000602082840312156150f4576150f3613451565b5b6000615102848285016150c9565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000615167602a83613521565b91506151728261510b565b604082019050919050565b600060208201905081810360008301526151968161515a565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006151f9602683613521565b91506152048261519d565b604082019050919050565b60006020820190508181036000830152615228816151ec565b9050919050565b600081905092915050565b600061524582614fe6565b61524f818561522f565b935061525f818560208601613532565b80840191505092915050565b6000615277828461523a565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006152b8601d83613521565b91506152c382615282565b602082019050919050565b600060208201905081810360008301526152e7816152ab565b905091905056fea2646970667358221220d230197a8b5ea240fcad30b8fa01b2dd190942a04fda3f73ed4534887474963464736f6c63430008120033",
    linkReferences: {},
    deployedLinkReferences: {},
  },
];
export const MERCHANT_REGISTRY_ADDRESS =
  "0xE7fa0e10ed955998650677034492700A8Ed484E9";
