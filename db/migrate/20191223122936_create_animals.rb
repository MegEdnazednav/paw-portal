class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :kind, default: ""
      t.string :name, default: ""
      t.integer :age, default: 0
      t.text :description, default: ""
      t.string :title, default: ""

      t.timestamps
    end
  end
end
