# Venus - Front End Technical Test

## Introduction

The exercise consists in building a small dApp that will call a smart contract located on the Binance Smart Chain in order to retrieve the balance of a given account we have named "treasury". The goal of this exercise is to showcase your skills and to present us how you'd approach a given problem.

## Resources

In the [config file](./src/config.ts), you will find the address of the smart contract (`XVS_CONTRACT_ADDRESS`) the dApp needs to call, the address of the treasury account (`TREASURY_ACCOUNT_ADDRESS`) and the URL of the RPC provider to use (`RPC_PROVIDER_URL`). The smart contract method you need to use in order to fetch the treasury balance is `balanceOf`. You can test it through [this link](https://bscscan.com/token/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63#readContract) (you will also find the ABI of the contract on this page).

We provide you with a Figma document (https://www.figma.com/file/KhPVDOyv7uO4kUfJqpILbB/Venus---Front-End-Tech-Test-Material) that is the source of truth for the designs of the dApp. Make sure to respect the proportions and the spacings as much as possible.

_All the sizes and spacings have been defined using a 4px base._

The illustration used has already been exported and you'll find it at [`src/assets/illustration.png`](src/assets/illustration.png).

## Exercise

Your goal is to build the dApp so it is as close as possible to the designs. You are free to use any tool and add any libraries you wish to this repository. There are only two restrictions for this exercise: you have to use React and TypeScript. Bonus point: tests!

On launch, the `balanceOf` method of the XVS smart contract should be called with the treasury account address using the RPC provider given. The balance retrieved (in wei of XVS) should then be converted in XVS and displayed on the front end.

_Note that the XVS token has 18 decimals._

When clicking on the "Refresh" button, the query should be sent again and the balance displayed should be updated to the newly fetched amount.

To start this test, first fork this repository to your GitHub account. Once the test complete, please send the URL of your repository at maxime.julian@binance.com (make sure your repository is public).

Good luck!
