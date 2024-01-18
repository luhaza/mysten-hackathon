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
 
	return (
		<div style={{ padding: 20 }}>
			{currentAccount && (
				<>
					<div>
						<button
							onClick={() => {
								signAndExecuteTransactionBlock(
									{
										transactionBlock: new TransactionBlock(),
										chain: 'sui:devnet',
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