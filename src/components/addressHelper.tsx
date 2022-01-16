import addresses from '../config/token'

const chainId = 97
// const chainId = 4
// const chainId = 1

export const getStakingAddress = () => {
  return addresses.staking[chainId]
}

export const getVariableAddress = () => {
  return addresses.variable[chainId]
}

export const getAirtAddress = () => {
  return addresses.airt[chainId]
}
