import { useSuiClientQuery } from "@mysten/dapp-kit";

const useGetPoints = () => {
  const handleGetPoints = (user_id : string) => {

    const id : string = user_id;
    const { data, isLoading, error, refetch } = useSuiClientQuery("getObject", {
      id,
      options: {
        showContent: true,
        showOwner: true,
      },
    });

    return { data, isLoading, error, refetch };
  };

  return handleGetPoints;
};

export default useGetPoints;