class AddPotatoToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :potato, :string
  end
end
