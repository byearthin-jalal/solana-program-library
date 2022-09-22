/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CreateNativeTreasury
 * @category generated
 */
export const CreateNativeTreasuryStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'CreateNativeTreasuryInstructionArgs'
)
/**
 * Accounts required by the _CreateNativeTreasury_ instruction
 *
 * @property [] governanceAccount Governance account the treasury account is for
 * @property [_writable_] nativeTreasuryAccount seeds=['treasury', governance]
 * @property [**signer**] payer
 * @category Instructions
 * @category CreateNativeTreasury
 * @category generated
 */
export type CreateNativeTreasuryInstructionAccounts = {
  governanceAccount: web3.PublicKey
  nativeTreasuryAccount: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const createNativeTreasuryInstructionDiscriminator = 25

/**
 * Creates a _CreateNativeTreasury_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CreateNativeTreasury
 * @category generated
 */
export function createCreateNativeTreasuryInstruction(
  accounts: CreateNativeTreasuryInstructionAccounts,
  programId = new web3.PublicKey('GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw')
) {
  const [data] = CreateNativeTreasuryStruct.serialize({
    instructionDiscriminator: createNativeTreasuryInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.governanceAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.nativeTreasuryAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}