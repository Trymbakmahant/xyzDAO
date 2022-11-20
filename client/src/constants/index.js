export const ABI = [
	{
		"inputs": [],
		"name": "becomeMember",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_proposalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_thumbnail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_videoUrl",
				"type": "string"
			}
		],
		"name": "createProposal",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "executeEarly",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "executeProposals",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_marketAPI",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			}
		],
		"name": "setUpload",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			}
		],
		"name": "updateCid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "Vote",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "getAllProposals",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "proposalId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "proposalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "thumbnailUrl",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "createdBy",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "funds",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "votes",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isUploaded",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "videoUrl",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "cid",
						"type": "string"
					}
				],
				"internalType": "struct XYZ.Proposal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProposals",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "proposalId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "proposalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "thumbnailUrl",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "createdBy",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "funds",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "votes",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isUploaded",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "videoUrl",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "cid",
						"type": "string"
					}
				],
				"internalType": "struct XYZ.Proposal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getSingleProposal",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "proposalId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "proposalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "thumbnailUrl",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "createdBy",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "funds",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "votes",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isUploaded",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "videoUrl",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "cid",
						"type": "string"
					}
				],
				"internalType": "struct XYZ.Proposal",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isUserAMember",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketapiInstance",
		"outputs": [
			{
				"internalType": "contract MarketAPI",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proposalOrVotePrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "proposalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "thumbnailUrl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "createdBy",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "funds",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votes",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isUploaded",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "videoUrl",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalProposals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const contractAddress = '0xD94d95542a972aE0131c062802ea886f5203eB11';