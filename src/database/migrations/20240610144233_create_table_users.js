exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.date("email").notNullable();
    table.text("phone").notNullable();
    table.text("plan").nullable();
    table.text("add").nullable();                 
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
  
  exports.down = knex => knex.schema.dropTable("users");