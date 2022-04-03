import BigNumber from "bignumber.js";

export const mint = async (airtContract: any, account: any, cnt: any) => {
  const temp = await airtContract.methods.getNFTPrice().call()
  const price = new BigNumber(temp)
  const amount = price.multipliedBy(cnt)
  return airtContract.methods.mintNFT(cnt).send({ from: account, value: amount });
};
