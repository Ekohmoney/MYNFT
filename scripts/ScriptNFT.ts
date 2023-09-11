import { ethers } from 'hardhat'

async function main() {
    const myNFT = await ethers.deployContract("EkohsNFT",[])
    await myNFT.waitForDeployment();

    console.log(`This contract has been deployed to this address ${myNFT.target}`)


    const _to = "0x4bbB77213eEd76a3aA2c4CAAFB07BfF19677ca71"

    const _tokenId = 0

    const _uri = "QmWPcLvht2KtYib9NdnPTx17cFThBAJ5BxgaPCYGRd3gcs"

    await myNFT.mint(_to, _tokenId, _uri);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

   



