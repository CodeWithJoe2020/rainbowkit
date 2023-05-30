import { useAccount,useBalance,useBlockNumber } from 'wagmi';
import { useIsMounted } from './useisMounted';
import { ConnectButton } from '@rainbow-me/rainbowkit';
 
function Wallet() {
  const mounted = useIsMounted();
  const { address} = useAccount();
  const { data } = useBalance({
    address: address,
  })
  const { data: blockNumberData } = useBlockNumber({
    watch: true,
  });

  return (
    <div>
    <ConnectButton />
    {mounted ? address && <p>Address {address}</p> : null}
    {mounted ? data && <p>Balance: {data?.formatted} {data?.symbol}</p> : null}
    {mounted && typeof blockNumberData !== 'undefined' && (
        <p>Blocknumber: {String(blockNumberData)}</p>
      )}
    </div>
  )
  
}

export default Wallet;
