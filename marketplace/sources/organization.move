module marketplace::organization{
    use std::string::String;
    use sui::object::{Self, UID, ID};
    use sui::tx_context::TxContext;
    use sui::table::{Table, Self};
    use marketplace::user::{User, Self};

    struct Organization has key{
        id : UID,
        name : String,
        table : Table<ID, User>,
    }

    public fun new(_name : String, ctx : &mut TxContext) : Organization {
        Organization {
            id : object::new(ctx),
            name: _name,
            table : table::new<ID, User>(ctx),
        }
    }

    public fun addMember(self : &mut Organization, user : User){
        table::add(&mut self.table, user::id(&mut user), user);
    }

    public fun removeMember(self : &mut Organization, user : &User){
        let item = table::remove(&mut self.table, user::id(user));
        user::delete(item);
    }

    public fun donate(stake: Coin<SUI>){
        
    }

    // public getter methods
    public fun username(self: &Organization): String { self.name }

    public fun members(self: &Organization): &Table<ID, User> { &self.table }

}