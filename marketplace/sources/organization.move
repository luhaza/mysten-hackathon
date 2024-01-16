module marketplace::organization{
    use std::string::String;
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;
    use std::vector;

    struct Organization has key{
        id : UID,
        name : String,
        points : u64,
        members : vector<UID>,
    }

    public fun new(_name : String, ctx : &mut TxContext) : Organization {
        Organization {
            id : object::new(ctx),
            name: _name,
            points: 0,
            members : vector::empty<UID>(),
        }
    }

    public fun addMember(self : &mut Organization, u_id : UID){
        vector::push_back<UID>(&mut self.members, u_id)
    }

    // public getter methods
    public fun username(self: &Organization): String { self.name }

    // public fun userid(self: &User): UID { self.user_id }
    public fun members(self: &Organization): vector<UID> { self.members }

    public fun points(self: &Organization): u64 { self.points }

}