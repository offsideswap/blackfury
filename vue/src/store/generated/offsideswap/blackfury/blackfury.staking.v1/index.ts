import { txClient, queryClient, MissingWalletError , registry} from './module'

import { VeValidator } from "./module/types/blackfury/staking/v1/staking"
import { VeDelegation } from "./module/types/blackfury/staking/v1/staking"
import { VeShares } from "./module/types/blackfury/staking/v1/staking"
import { VeUnbondingDelegation } from "./module/types/blackfury/staking/v1/staking"
import { VeUnbondingDelegationEntry } from "./module/types/blackfury/staking/v1/staking"
import { VeUnbondingDelegationEntryBalances } from "./module/types/blackfury/staking/v1/staking"
import { VeRedelegation } from "./module/types/blackfury/staking/v1/staking"
import { VeRedelegationEntry } from "./module/types/blackfury/staking/v1/staking"
import { VeRedelegationEntryShares } from "./module/types/blackfury/staking/v1/staking"
import { VeTokens } from "./module/types/blackfury/staking/v1/staking"


export { VeValidator, VeDelegation, VeShares, VeUnbondingDelegation, VeUnbondingDelegationEntry, VeUnbondingDelegationEntryBalances, VeRedelegation, VeRedelegationEntry, VeRedelegationEntryShares, VeTokens };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				VeDelegate: {},
				
				_Structure: {
						VeValidator: getStructure(VeValidator.fromPartial({})),
						VeDelegation: getStructure(VeDelegation.fromPartial({})),
						VeShares: getStructure(VeShares.fromPartial({})),
						VeUnbondingDelegation: getStructure(VeUnbondingDelegation.fromPartial({})),
						VeUnbondingDelegationEntry: getStructure(VeUnbondingDelegationEntry.fromPartial({})),
						VeUnbondingDelegationEntryBalances: getStructure(VeUnbondingDelegationEntryBalances.fromPartial({})),
						VeRedelegation: getStructure(VeRedelegation.fromPartial({})),
						VeRedelegationEntry: getStructure(VeRedelegationEntry.fromPartial({})),
						VeRedelegationEntryShares: getStructure(VeRedelegationEntryShares.fromPartial({})),
						VeTokens: getStructure(VeTokens.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getVeDelegate: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VeDelegate[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: blackfury.staking.v1 initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async MsgVeDelegate({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.msgVeDelegate(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.msgVeDelegate({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'VeDelegate', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgVeDelegate', payload: { options: { all }, params: {...key},query }})
				return getters['getVeDelegate']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgVeDelegate API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgVeDelegate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgVeDelegate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgVeDelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgVeDelegate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgVeDelegate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgVeDelegate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgVeDelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgVeDelegate:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
