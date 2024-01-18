#[allow(unused_use)]
module marketplace::organization{
    use std::string::{String,Self};
    use sui::object::{Self, UID, ID};
    use sui::tx_context::{Self, TxContext};
    use sui::table::{Table, Self};
    use marketplace::user::{User, Self};
    use sui::coin::{Self, Coin};
    use sui::sui::SUI;
    use sui::balance::{Self, Balance};
    use std::vector;

    #[test_only]
    use sui::test_scenario::{Self as test, Scenario, next_tx, ctx, end, TransactionEffects};

    const EZeroAmount: u64 = 0;

    // account capability
    struct AccountCap has key, store {
        id: UID,
        /// The owner of this AccountCap. Note: this is
        /// derived from an object ID, not a user address
        owner: address
    }

    struct Organization has key {
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

    public fun add_member(self : &mut Organization, user : User) {
        table::add(&mut self.table, user::id(&user), user);
    }

    // remove by id
    public fun remove_member(self : &mut Organization, user_id : ID) : User {
        table::remove(&mut self.table, user_id)
    }

    public fun donate(self : &mut Organization, sui: Coin<SUI>) {
        assert!(coin::value(&sui) > 0, EZeroAmount);
        let sui_gift = coin::into_balance(sui);
        balance::join(&mut self.balance, sui_gift);
    }

    public fun withdraw(self : &mut Organization, quantity : u64, ctx: &mut TxContext) : Coin<SUI> {
        let bal = balance::split(&mut self.balance, quantity);

        //convert the balance into a coin and return it
        coin::from_balance<SUI>(bal, ctx)
    }

    // public getter methods
    public fun name(self: &Organization): String { self.name }

    public fun members(self: &Organization): &Table<ID, User> { &self.table }

    public fun balance(self: &Organization) : u64 { balance::value<SUI>( &self.balance ) }

    public fun create_account_cap(ctx: &mut TxContext): AccountCap {
        let id = object::new(ctx);
        let owner = object::uid_to_address(&id);
        AccountCap {id, owner}
    }

    #[test_only]
    public fun delete(self: Organization, users: &mut vector<ID>) {
        let Organization {id, name : _, table, balance} = self;

        while (!table::is_empty(&table)) {
            let delete_id = vector::pop_back(users);
            user::delete(
                table::remove(&mut table,
                    delete_id));
        };

        object::delete(id);
        balance::destroy_for_testing(balance);
        table::destroy_empty(table);
    }

    #[test_only]
    public fun delete_coin(coin: Coin<SUI>) {
        coin::burn_for_testing(coin);
    }


    // unit tests
    #[test]
    public fun test_org_creation() {
        let test_org = new(string::utf8(b"Williams College"), &mut tx_context::dummy());

        // check name, balance, table
        assert!(string::length(&name(&test_org)) == 16 && balance(&test_org) == 0 && table::length(members(&test_org)) == 0, 1);

        let v: vector<ID> = vector[];
        delete(test_org, &mut v);
        vector::destroy_empty(v);
    }


    #[test]
    public fun test_add_member() {
        let test_org = new(string::utf8(b"Williams College"), &mut tx_context::dummy());
        let test_user = user::new(string::utf8(b"test user"), &mut tx_context::dummy());

        let users = vector::empty<ID>();
        vector::push_back(&mut users, user::id(&test_user));

        add_member(&mut test_org, test_user);

        assert!(table::length(members(&test_org)) == 1, 1);

        delete(test_org, &mut users);
    }


    #[test]
    public fun test_remove_member() {
        let test = test::begin(@0x1); {
            let test_org = new(string::utf8(b"Williams College"), test::ctx(&mut test));
            let test_user1 = user::new(string::utf8(b"test user 1"), test::ctx(&mut test));
            let test_user2 = user::new(string::utf8(b"test user 2"), test::ctx(&mut test));

            let users = vector::empty<ID>();
            vector::push_back(&mut users, user::id(&test_user1));
            vector::push_back(&mut users, user::id(&test_user2));

            add_member(&mut test_org, test_user1);
            add_member(&mut test_org, test_user2);
        
            let user_id = vector::pop_back(&mut users);
            let del_user = remove_member(&mut test_org, user_id);
            
            // check that length of table is 1
            // check that test_user2 still exists
            assert!(table::length(members(&test_org)) == 1, 1);

            user::delete(del_user);
            delete(test_org, &mut users); 
            };
        end(test);
    }


    #[test]
    public fun test_donate() {
        let test_org = new(string::utf8(b"Williams College"), &mut tx_context::dummy());
       
        let balance = balance::zero<SUI>();
        let another = balance::create_for_testing(1000);
        balance::join(&mut balance, another);

        assert!(balance::value(&balance) == 1000, 0);

        let sui = coin::from_balance<SUI>(balance, &mut tx_context::dummy());
        donate(&mut test_org, sui);

        delete(test_org, &mut vector::empty<ID>());
    }


    #[test]
    public fun test_withdraw() {
        let test_org = new(string::utf8(b"Williams College"), &mut tx_context::dummy());
        let balance = balance::zero<SUI>();
        let another = balance::create_for_testing(1000);
        balance::join(&mut balance, another);

        let sui = coin::from_balance<SUI>(balance, &mut tx_context::dummy());

        donate(&mut test_org, sui);

        let withdrawn_coin = withdraw(&mut test_org, 1000, &mut tx_context::dummy());

        assert!(coin::value(&mut withdrawn_coin) == 1000 && balance(&test_org) == EZeroAmount, 1);

        delete_coin(withdrawn_coin);
        delete(test_org, &mut vector::empty<ID>());
    }
}