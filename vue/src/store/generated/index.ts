// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import OffsideswapBlackfuryBlackfuryErc20V1 from './offsideswap/blackfury/blackfury.erc20.v1'
import OffsideswapBlackfuryBlackfuryGaugeV1 from './offsideswap/blackfury/blackfury.gauge.v1'
import OffsideswapBlackfuryBlackfuryMakerV1 from './offsideswap/blackfury/blackfury.maker.v1'
import OffsideswapBlackfuryBlackfuryOracleV1 from './offsideswap/blackfury/blackfury.oracle.v1'
import OffsideswapBlackfuryBlackfuryStakingV1 from './offsideswap/blackfury/blackfury.staking.v1'
import OffsideswapBlackfuryBlackfuryVeV1 from './offsideswap/blackfury/blackfury.ve.v1'
import OffsideswapBlackfuryBlackfuryVestingV1 from './offsideswap/blackfury/blackfury.vesting.v1'
import OffsideswapBlackfuryBlackfuryVoterV1 from './offsideswap/blackfury/blackfury.voter.v1'


export default { 
  OffsideswapBlackfuryBlackfuryErc20V1: load(OffsideswapBlackfuryBlackfuryErc20V1, 'blackfury.erc20.v1'),
  OffsideswapBlackfuryBlackfuryGaugeV1: load(OffsideswapBlackfuryBlackfuryGaugeV1, 'blackfury.gauge.v1'),
  OffsideswapBlackfuryBlackfuryMakerV1: load(OffsideswapBlackfuryBlackfuryMakerV1, 'blackfury.maker.v1'),
  OffsideswapBlackfuryBlackfuryOracleV1: load(OffsideswapBlackfuryBlackfuryOracleV1, 'blackfury.oracle.v1'),
  OffsideswapBlackfuryBlackfuryStakingV1: load(OffsideswapBlackfuryBlackfuryStakingV1, 'blackfury.staking.v1'),
  OffsideswapBlackfuryBlackfuryVeV1: load(OffsideswapBlackfuryBlackfuryVeV1, 'blackfury.ve.v1'),
  OffsideswapBlackfuryBlackfuryVestingV1: load(OffsideswapBlackfuryBlackfuryVestingV1, 'blackfury.vesting.v1'),
  OffsideswapBlackfuryBlackfuryVoterV1: load(OffsideswapBlackfuryBlackfuryVoterV1, 'blackfury.voter.v1'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
