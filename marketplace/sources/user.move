module marketplace::user {
    use std::string::String;
    // use sui::object::{Self, UID};
    // use sui::tx_context::TxContext;

    struct User has key {
        // username; could be taken from sui wallet, custom, or generated id
        // user_id: UID, // ??
        username: String,

        // points accumulated from donations for reward program
        points: u64
    }

    // constructor function
    public fun new(user: String): User {
        User {
            username: user,
            // user_id: object::new(&mut TxContext),
            points: 0
        }
    }

    // public function to add points to a user's profile
    public fun addPoints(self: &mut User, num_points: u64) {
        self.points = self.points + num_points;
    }

    // public getter methods
    public fun username(self: &User): String { self.username }

    // public fun userid(self: &User): UID { self.user_id }

    public fun points(self: &User): u64 { self.points }
}