const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545/");

const all_128_block_hash = async () => {
    for (let i = 0; i < 129; i++) {
        const block = await web3.eth.getBlock(i);
        console.log(`block ${i} hash: ${block.hash}`);
    }
}
// all_128_block_hash();

const find_first_smartcontract_block = async () => {
    // const block = await web3.eth.getBlock(4235481);
    // console.log(block);
    // for (let i = 0; i <= 128000; i++) {
    //     const block = await web3.eth.getBlock(i);
    //     if (block.transactions.length) {
    //         console.log(`block ${i} hash: ${block.hash} ${block.transactions[0]}`);
    //         break;
    //     }
    // }
    let i = 0
    let firstSCtx = ''

    while (firstSCtx == '') {
        let totHash = await web3.eth.getBlock(i);
        if (totHash.transactions.length) {
            let len = totHash.transactions.length
            for (j = 0; j < len; j++) {
                console.log(i,j)
                if (web3.eth.getTransactionReceipt(web3.eth.getBlock(i).transactions[j]).to == '') {
                    firstSCtx = web3.eth.getTransactionReceipt(web3.eth.getBlock(i).transactions[j]);
                    console.log(i)
                    break;
                }
            }
            i = i + 1;
        }
    }
}
find_first_smartcontract_block();
