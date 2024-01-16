module marketplace::organization{
    use std::string::String;
    use sui::object::{Self, UID, ID};
    use sui::tx_context::TxContext;
    use std::vector;

    struct Organization has key{
        id : UID,
        name : String,
        members : vector<ID>,
    }

    public fun new(_name : String, ctx : &mut TxContext) : Organization {
        Organization {
            id : object::new(ctx),
            name: _name,
            members : vector::empty<ID>(),
        }
    }

    public fun addMember(self : &mut Organization, u_id : ID){
        vector::push_back<ID>(&mut self.members, u_id)
    }


    // public getter methods
    public fun username(self: &Organization): String { self.name }

    public fun members(self: &Organization): vector<ID> { self.members }


}