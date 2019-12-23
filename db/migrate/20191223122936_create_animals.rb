class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :kind
      t.string :name
      t.integer :age
      t.text :description
      t.string :title

      t.timestamps
    end
  end
end
