import {
	useCurrentAccount,
	useSignAndExecuteTransactionBlock,
} from '@mysten/dapp-kit';
import { useState } from 'react';
import { TransactionBlock } from "@mysten/sui.js/transactions"; 

const DonateButton  = () => {
	const { mutate: signAndExecuteTransactionBlock } = useSignAndExecuteTransactionBlock();
	const [digest, setDigest] = useState('');
	const currentAccount = useCurrentAccount();
 
    const donate = () => {
        let txb = new TransactionBlock();
        const [coin] = txb.splitCoins(txb.gas, [txb.pure.u64(1000)]);
        
        txb.moveCall({
            target: '0x2da8cd5a514de9150ed7019e1e1ccf6ec4f23f272162a8389813d5a56fd1b151::organization::donate', 
            arguments: [txb.object('0x62be33c3b976258aebd029d44b23154d5862d9e2b5a100a17c43f0c817214f4e'), coin]
        });
        return txb;
    }

	return (
		<div style={{ padding: 20 }}>
            {!currentAccount && (
                <h2> Sign in to Donate</h2>
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
									},
								);
							}}
						className="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded-lg py-10% px-5% rounded m-4 sm:text-md md:text-lg lg:text-xl">
							DONATE
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default DonateButton;