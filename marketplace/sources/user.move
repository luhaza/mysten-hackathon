module marketplace::user {
    use std::string::String;
    use std::vector;
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;

    struct User has key {
        id: UID, // UID
        username: String, // username 
        points: u64, // points accumulated from donations for reward program
        orgs: vector<UID> // member of organizations vector
    }

    // constructor function with username and context parameters
    public fun new(user: String, ctx: &mut TxContext): User {
        User {
            username: user,
            id: object::new(ctx),
            points: 0,
            orgs: vector::empty<UID>()
        }
    }

    // public function to add points to a user's profile
    public fun addPoints(self: &mut User, num_points: u64) {
        self.points = self.points + num_points;
    }

    // public getter methods
    public fun username(self: &User): String { self.username }

    public fun id(self: &User): UID { self.id }

    public fun points(self: &User): u64 { self.points }
}