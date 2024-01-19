import { useSuiClientQuery } from "@mysten/dapp-kit";

const useGetBalance = () => {
  const handleGetBalance = (org_id : string) => {

    const id : string = org_id;
    const { data, isLoading, error, refetch } = useSuiClientQuery("getObject", {
      id,
      options: {
        showContent: true,
        showOwner: true,
      },
    });

    return { data, isLoading, error, refetch };
  };

  return handleGetBalance;
};

export default useGetBalance;