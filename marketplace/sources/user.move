module marketplace::user {
    use std::string::String;
    use std::vector;
    use sui::object::{Self, UID, ID};
    use sui::tx_context::TxContext;

    struct User has key {
        id: UID, // UID
        username: String, // username 
        points: u64, // points accumulated from donations for reward program
        orgs: vector<ID> // member of organizations vector
    }

    // constructor function with username and context parameters
    // default values of 0/empty for points/orgs respectively
    public fun new(user: String, ctx: &mut TxContext): User {
        User {
            id : object::new(ctx),
            username: user,
            points: 0,
            orgs: vector::empty<ID>()
        }
    }

    // public function to add points to a user's profile
    public fun add_points(self: &mut User, num_points: u64) {
        self.points = self.points + num_points;
    }

    public fun add_organization(self: &mut User, org: ID) {
        vector::push_back(&mut self.orgs, org)
    }

    // public getter methods
    public fun username(self: &User): String { self.username }

    public fun id(self: &User): ID { self.id } // TODO: use UID to ID method

    public fun orgs(self: &User): vector<ID> { self.orgs }

    public fun points(self: &User): u64 { self.points }
}