class ChangePriceToBeFloatInMaintenances < ActiveRecord::Migration[6.0]
  def change
    change_column :maintenances, :price, :float
  end
end
