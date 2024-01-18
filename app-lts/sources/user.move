#[allow(unused_use)]
module marketplace::user {
    use std::string::{String,Self};
    use std::vector;
    use sui::object::{Self, UID, ID};
    use sui::tx_context::{Self, TxContext};

    struct User has key, store {
        id : UID,
        username : String,
        points: u64, // points accumulated from donations
        rewards: vector<String> // vector of rewards earned through points
    }

    // constructor function
    public fun new(user: String, ctx: &mut TxContext): User {
        User {
            id: object::new(ctx),
            username: user,
            points: 0, 
            rewards: vector::empty<String>(),
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
    public fun rewards(self: &User) : vector<String> { self.rewards }
    
    public fun delete(self: User) {
        let User {id, username : _, points : _, rewards : _} = self;
        object::delete(id);
    }

    // unit tests
    #[test]
    public fun test_user_creation() {
        let test_user = new(string::utf8(b"test user"), &mut tx_context::dummy());
        
        assert!(string::length(&username(&test_user)) == 9 && points(&test_user) == 0, 1);

        delete(test_user);
    }

    #[test]
    public fun test_add_points() {
        let test_user = new(string::utf8(b"test user"), &mut tx_context::dummy());
        add_points(&mut test_user, 5);

        assert!(points(&test_user) == 5, 1);

        delete(test_user);
    }
}