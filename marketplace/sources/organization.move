module marketplace::organization{
    use std::string::String;
    use sui::object::{Self, UID, ID};
    use sui::tx_context::TxContext;
    use sui::table::{Table, Self};
    use marketplace::user::{User, Self};
    use sui::coin::{Self, Coin};
    use sui::transfer;
    use sui::sui::SUI;
    use sui::balance::{Self, Supply, Balance};

    const EZeroAmount: u64 = 0;

    struct Organization has key{
        id : UID,
        name : String,
        table : Table<ID, User>,
        balance : Balance<SUI>,
    }

    public fun new(_name : String, ctx : &mut TxContext) : Organization {
        Organization {
            id : object::new(ctx),
            name: _name,
            table : table::new<ID, User>(ctx),
            balance : balance::zero<SUI>(),
        }
    }

    public fun addMember(self : &mut Organization, user : User){
        table::add(&mut self.table, user::id(&mut user), user);
    }

    public fun removeMember(self : &mut Organization, user : &User){
        let item = table::remove(&mut self.table, user::id(user));
        user::delete(item);
    }

    public fun donate(self : &mut Organization, sui: Coin<SUI>) : u64{
        // let address = object::uid_to_address(&self.id);
        // transfer::transfer(stake, address);
        assert!(coin::value(&sui) > 0, EZeroAmount);
        let sui_gift = coin::into_balance(sui);
        balance::join(&mut self.balance, sui_gift)
    }

    public fun withdraw(self : &mut Organization, sui : Coin<SUI>) : u64{
        assert!(coin::value(&sui) > 0, EZeroAmount);
        let sui_withdrawal = coin::into_balance(sui);
        let sui_value = balance::value(&sui_withdrawal);

        //turn the balance into a u64 and return it
        let bal = balance::split(&mut self.balance, sui_value);
        let zero = balance::zero();
        balance::join(&mut bal, zero)
    }

    // public getter methods
    public fun username(self: &Organization): String { self.name }

    public fun members(self: &Organization): &Table<ID, User> { &self.table }

    public fun create_account_cap(ctx: &mut TxContext): AccountCap {
        let id = object::new(ctx);
        let owner = object::uid_to_address(&id);
        AccountCap {id, owner}
    }

}