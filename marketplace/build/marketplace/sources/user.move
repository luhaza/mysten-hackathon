module marketplace::user {
    use std::string::String;
    use std::vector;
    use sui::object::{Self, UID, ID};
    use sui::tx_context::TxContext;

    struct User has key, store {
        // username; could be taken from sui wallet, custom, or generated id
        id: UID, 
        username: String,

        // points accumulated from donations for reward program
        points: u64, 
        rewards: vector<String>
    }

    // constructor function
    public fun new(user: String, ctx : &mut TxContext): User {
        User {
            id : object::new(ctx),
            username: user,
            points: 0, 
            rewards : vector::empty<String>(),
        }
    }

    // public function to add points to a user's profile
    public fun add_points(self: &mut User, num_points: u64) {
        self.points = self.points + num_points;
    }

    // public getter methods
    public fun id(self: &User) : ID {object::uid_to_inner(&self.id)}
    public fun username(self: &User): String { self.username }
    public fun points(self: &User): u64 { self.points }
    public fun rewards(self: &User) : vector<String> {self.rewards}
    
    public fun delete(self: User) {
        let User {id, username : _, points : _, rewards : _} = self;
        object::delete(id);
    }
}