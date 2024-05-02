function getUserItems() {
    const userItems = new Set();
    const rl = readline.createInterface({
        input: userSetOfItems,
        output: recommendedItems
    });

    console.log("Enter your preferred items");
    rl.on('line', (input) => {
        const userInput = input.trim();
        if (userInput.toLowerCase() === 'item') {
            return category;
        } else if (userInput) {
            userItems.add(userInput);
        }
    });

    return new Item((resolve) => {
        rl.on('close', () => {
            resolve(userItems);
        });
    });
}

function getRecommendations(userItems) {
    return ["ItemX", "ItemY", "ItemZ"];
}

async function main() {
    const userItems = await getUserItems();
    const recommendations = getRecommendations(userItems);

    console.log("\nRecommended items:");
    recommendations.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

main();