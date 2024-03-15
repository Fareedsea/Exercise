// Make a list of current users
let current_users = ["John", "Alice", "Bob", "Eve", "Charlie"];

// Check if the list of users is not empty
if (current_users.length === 0) {
    console.log("We need to find some users!");
} else {
    // Make a list of new users
    let new_users = ["Mary", "John", "Sarah", "Bob", "David"];

    // Loop through the new_users list to check for availability
    for (let new_user of new_users) {
        // Convert both current and new usernames to lowercase for case-insensitive comparison
        let is_duplicate = false;
        for (let current_user of current_users) {
            if (current_user.toLowerCase() === new_user.toLowerCase()) {
                is_duplicate = true;
                break;
            }
        }
        // Print messages based on availability
        if (is_duplicate) {
            console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
        } else {
            console.log(`Congratulations! The username '${new_user}' is available.`);
        }
    }
}
