class CreateMaintenances < ActiveRecord::Migration[6.0]
  def change
    create_table :maintenances do |t|
      t.string :kind
      t.integer :mileage
      t.string :parts
      t.text :description
      t.integer :price
      t.belongs_to :vehicle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
