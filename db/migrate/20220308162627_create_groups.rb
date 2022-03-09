class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :category
      t.text :description

      t.timestamps
    end
  end
end
