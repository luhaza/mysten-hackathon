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
    public fun add_points(self: &mut User, num_points: u64) {
        self.points = self.points + num_points;
    }

    public fun add_organization(self: &mut User, org: UID) {
        vector::push_back(&mut self.orgs, org)
    }

    // public getter methods
    public fun username(self: &User): String { self.username }

    public fun id(self: &User): UID { self.id }

    public fun orgs(self: &User): vector<UID> { self.orgs }

    public fun points(self: &User): u64 { self.points }
}