module.exports = {
    client: require("ganache-cli"), // This will use ganache specified in your own dev dependencies
    // measureStatementCoverage: false,
    // measureFunctionCoverage: false,
    skipFiles:[
        'DECO.sol',
        'DigitalaxAccessControls.sol',
        'DigitalaxAuction.sol',
        'DigitalaxAuctionV2.sol',
        'DigitalaxGenesisNFT.sol',
        'DigitalaxIndex.sol',
        'DigitalaxMarketplace.sol',
        'DigitalaxMarketplaceV2.sol',
        'DigitalaxPodeMaterials.sol',
        'DigitalaxPodeNFT.sol',
        'DigitalaxPodePortal.sol',
        //'DigitalaxSubscriptionMarketplace.sol',
        'DripMarketplace.sol',
        'EIP2771/BaseRelayRecipient.sol',
        'EIP2771/IRelayRecipient.sol',
        'ERC1155/ERC1155.sol',
        'ERC1155/ERC1155Burnable.sol',
        'ERC1155/ERC1155BurnableV2.sol',
        'ERC20/IWETH.sol',
        'ERC20/MONA.sol',
        'ERC20/WethToken.sol',
        'ERC721/DigitalaxERC721.sol',
        'ERC721/ERC721WithSameTokenURIForAllTokens.sol',
        'ERC998/IERC998ERC1155TopDown.sol',
        'ESPADEV.sol',
        'garment/DFBundle.sol',
        'garment/DFBundleMainnet.sol',
        'garment/DigitalaxGarmentCollection.sol',
        'garment/DigitalaxGarmentCollectionV2.sol',
        'garment/DigitalaxGarmentFactory.sol',
        'garment/DigitalaxGarmentNFT.sol',
        'garment/DigitalaxGarmentNFTv2.sol',
        'garment/DigitalaxGarmentNFTv3.sol',
        'garment/DigitalaxGarmentUpgrader.sol',
        'garment/DigitalaxMaterials.sol',
        'garment/DigitalaxMaterialsV2.sol',
        // 'garment/DigitalaxSubscriptionCollection.sol',
        // 'garment/DigitalaxSubscriptionFactory.sol',
        // 'garment/DigitalaxSubscriptionNFT.sol',
        // 'garment/DigitalaxSubscriptionNFTMainnet.sol',
        'garment/IDigitalaxGarmentNFT.sol',
        'garment/IDigitalaxMaterials.sol',
        'lib/Merkle.sol',
        'lib/MerklePatriciaProof.sol',
        'lib/RLPEncode.sol',
        'lib/RLPReader.sol',
        'mock/BaseChildTunnelMock.sol',
        'mock/BaseRootTunnelMock.sol',
        'mock/DigitalaxMarketplaceV2Mock.sol',
        'mock/DigitalaxMonaStakingMock.sol',
        'mock/DigitalaxNFTRewardsV2Mock.sol',
        'mock/DigitalaxNFTStakingMock.sol',
        'mock/DigitalaxPodeNFTMock.sol',
        'mock/DigitalaxRewardsV2Mock.sol',
        'mock/DigitalaxRootTunnelMock.sol',
        'mock/DripMarketplaceMock.sol',
        'mock/ERC1155Mock.sol',
        'mock/ERC1155ReceiverMock.sol',
        'mock/ERC165Mock.sol',
        'mock/ERC721ReceiverMock.sol',
        'mock/GuildNFTRewardsMock.sol',
        'mock/GuildNFTRewardsV2Mock.sol',
        'mock/GuildNFTStakingMock.sol',
        'mock/GuildNFTStakingWeightMock.sol',
        'mock/GuildNFTStakingWeightV2Mock.sol',
        'mock/GuildWhitelistedNFTStakingMock.sol',
        'mock/MarketplaceBuyingContractMock.sol',
        'mock/MockDECO.sol',
        'mock/MockERC20.sol',
        'mock/MockVault.sol',
        'mock/AlwaysRevertingEthReceiver.sol',
        'mock/BiddingContractMock.sol',
        'mock/DigitalaxAuctionMock.sol',
        'mock/DigitalaxGarmentNFTv2TunnelMock.sol',
        'mock/DigitalaxGenesisNFTMock.sol',
        'mock/DigitalaxMarketplaceMock.sol',
        'mock/DigitalaxSubscriptionMarketplaceMock.sol',
        'mock/DigitalaxSubscriptionNFTTunnelMock.sol',
        'mock/DigitalaxSubscriptionRootTunnelMock.sol',
        'oracle/DecoOracle_me.sol',
        'oracle/DecoOracle.sol',
        'oracle/DigitalaxMonaOracle.sol',
        'oracle/DripOracle.sol',
        'oracle/IDigitalaxMonaOracle.sol',
        'oracle/IDripOracle.sol',
        'oracle/IOracle.sol',
        'PodeNFTv2-backup.sol',
        'PodeNFTv2.sol',
        'proxy/DigitalaxProxy.sol',
        'root/ICheckpointManager.sol',
        'root/StateSender/IStateSender.sol',
        'staking/DigitalaxMonaStaking.sol',
        'staking/DigitalaxNFTStaking.sol',
        'staking/DigitalaxRewardsV2.sol',
        'staking/GuildNFTRewards.sol',
        'staking/DigitalaxNFTRewardsV2.sol',
        'staking/GuildNFTStaking.sol',
         'staking/GuildNFTRewardsV2.sol',
        'staking/GuildNFTStakingWeightV1.sol',
         'staking/GuildNFTStakingWeightV2.sol',
      //   'staking/GuildWhitelistedNFTStaking.sol',
        'oracle/UniswapOracleExample.sol',
        'staking/interfaces/IDigitalaxNFT.sol',
        'staking/interfaces/IDigitalaxNFTRewards.sol',
        'staking/interfaces/IDigitalaxRewards.sol',
        'staking/interfaces/IERC20.sol',
        'staking/interfaces/IGuildNFTRewards.sol',
        'staking/interfaces/IGuildNFTRewardsWhitelisted.sol',
        'staking/interfaces/IGuildNFTStakingWeight.sol',
        'staking/interfaces/IGuildNFTStakingWeightWhitelisted.sol',
        'staking/interfaces/IPodeNFTv2.sol',
        'staking/interfaces/IWETH9.sol',
         'tunnel/BaseChildTunnel.sol',
        // 'tunnel/BaseRootTunnel.sol',
        // 'tunnel/DigitalaxRootTunnel.sol',
        // 'tunnel/DigitalaxSubscriptionRootTunnel.sol',
        // 'tunnelV2/FxBaseChildTunnel.sol',
        // 'tunnelV2/FxBaseRootTunnel.sol',
        // 'tunnelV2/FxStateChildTunnel.sol',
        // 'tunnelV2/FxStateRootTunnel.sol',
        'utils/DigitalaxSubscriptionBurner.sol',
        'oracle/UniswapPairOracle_MONA_WETH.sol',
        // 'uniswapv2/interfaces/IERC20.sol',
        // 'uniswapv2/interfaces/IUniswapV2Callee.sol',
        // 'uniswapv2/interfaces/IUniswapV2ERC20.sol',
        // 'uniswapv2/interfaces/IUniswapV2Factory.sol',
        // 'uniswapv2/interfaces/IUniswapV2Pair.sol',
        // 'uniswapv2/interfaces/IUniswapV2Router01.sol',
        // 'uniswapv2/interfaces/IUniswapV2Router02.sol',
        // 'uniswapv2/interfaces/IWETH.sol',
        // 'uniswapv2/libraries/FixedPoint.sol',
        // 'uniswapv2/libraries/Math.sol',
        // 'uniswapv2/libraries/SafeMath.sol',
        // 'uniswapv2/libraries/TransferHelper.sol',
        // 'uniswapv2/libraries/UniswapV2Library.sol',
        // 'uniswapv2/libraries/UQ112x112.sol',
        // 'uniswapv2/UniswapOracleExample.sol',
        // 'uniswapv2/UniswapV2ERC20.sol',
        // 'uniswapv2/UniswapV2Factory.sol',
        // 'uniswapv2/UniswapV2OracleLibrary.sol',
        // 'uniswapv2/UniswapV2Pair.sol',
        // 'uniswapv2/UniswapV2Router02.sol',
    ],
    providerOptions: {
        gasLimit: 0x1fffffffffffff,
        allowUnlimitedContractSize: true,
        default_balance_ether: 0x1fffffffffffff,
    }
}
