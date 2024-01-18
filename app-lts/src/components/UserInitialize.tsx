import { TransactionBlock } from "@mysten/sui.js/transaction";
<form
  onSubmit={(e) => {
    e.preventDefault();

    // Create new transaction block
    const txb = new TransactionBlock();
    // Split gas coin into house stake coin
    // SDK will take care for us abstracting away of up-front coin selections
    const [houseStakeCoin] = txb.splitCoins(txb.gas, [
      MIST_PER_SUI * BigInt(houseStake),
    ]);
    // Calling smart contract function
    txb.moveCall({
      target: `${PACKAGE_ID}::house_data::initialize_house_data`,
      arguments: [
        txb.object(HOUSECAP_ID),
        houseStakeCoin,
        // This argument is not an on-chain object, hence, we must serialize it using `bcs`
        // https://sdk.mystenlabs.com/typescript/transaction-building/basics#pure-values
        txb.pure(
          bcs
            .vector(bcs.U8)
            .serialize(curveUtils.hexToBytes(getHousePubHex())),
        ),
      ],
    });

    execInitializeHouse(
      {
        transactionBlock: txb,
        options: {
          showObjectChanges: true,
        },
      },
      {
        onError: (err) => {
          toast.error(err.message);
        },
        onSuccess: (result: SuiTransactionBlockResponse) => {
          let houseDataObjId;


          result.objectChanges?.some((objCh) => {
            if (
              objCh.type === "created" &&
              objCh.objectType === `${PACKAGE_ID}::house_data::HouseData`
            ) {
              houseDataObjId = objCh.objectId;
              return true;
            }
          });

          setHouseDataId(houseDataObjId!);

          toast.success(`Digest: ${result.digest}`);
        },
      },
    );
  }}