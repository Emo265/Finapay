// stablecoin.ts

// Stablecoin transfer handler for USDT on Ethereum

import { ethers } from 'ethers';

// Your Ethereum provider (Infura, Alchemy, etc.)
const provider = new ethers.providers.JsonRpcProvider('YOUR_PROVIDER_URL');

// USDT contract address on Ethereum mainnet
const USDT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7';

// ABI for the USDT contract - minimal required parts
const usdtAbi = [
    'function transfer(address to, uint amount) public returns (bool)',
    'function balanceOf(address owner) view returns (uint)',
];

// Create a contract instance
const usdtContract = new ethers.Contract(USDT_ADDRESS, usdtAbi, provider);

/**
 * Transfer USDT from one address to another.
 * @param sender - The address sending USDT.
 * @param recipient - The address receiving USDT.
 * @param amount - The amount of USDT to send (in wei).
 * @returns boolean - Returns true if the transfer was successful.
 */
async function transferUSDT(sender: string, recipient: string, amount: string): Promise<boolean> {
    // Create a signer (replace with your wallet private key)
    const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
    const usdtWithSigner = usdtContract.connect(wallet);

    const tx = await usdtWithSigner.transfer(recipient, amount);
    await tx.wait(); // Wait for the transaction to be mined
    return true;
}

export { transferUSDT };