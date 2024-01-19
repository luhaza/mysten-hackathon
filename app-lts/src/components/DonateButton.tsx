import {
	useCurrentAccount,
	useSignAndExecuteTransactionBlock,
} from '@mysten/dapp-kit';
import React, { useState } from 'react';
import { TransactionBlock } from "@mysten/sui.js/transactions"; 

const donateAmount : number = 1000;
interface DonateButtonProps {
    org_id : string
}

const DonateButton : React.FC<DonateButtonProps>= ({ org_id }) => {
	const { mutate: signAndExecuteTransactionBlock } = useSignAndExecuteTransactionBlock();
	const [digest, setDigest] = useState('');
	const currentAccount = useCurrentAccount();
 
    const donate = () => {
        let txb = new TransactionBlock();
        const [coin] = txb.splitCoins(txb.gas, [txb.pure.u64(donateAmount)]);
        
        txb.moveCall({
            target: '0x2da8cd5a514de9150ed7019e1e1ccf6ec4f23f272162a8389813d5a56fd1b151::organization::donate', 
            arguments: [txb.object(org_id), coin]
        });
        return txb;
    }

	return (
		<div style={{ padding: 20 }}>
            {!currentAccount && (
                <h2> Connect Wallet to Donate</h2>
            )}

			{currentAccount && (
				<>
					<div>
						<button
							onClick={() => {
								signAndExecuteTransactionBlock(
									{
										transactionBlock: donate(),
										chain: 'sui:testnet',
									},
									{
										onSuccess: (result) => {
											console.log('executed transaction block', result);
											setDigest(result.digest);
										},
                                        onError: (res) => {
                                            console.log(res);
                                        }
									},
								);
							}}

						className="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded-lg py-10% px-5% rounded m-6 sm:text-md md:text-lg lg:text-xl p-3">
							DONATE
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default DonateButton;